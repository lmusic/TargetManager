using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using TargetManager.API.ViewModels;
using TargetManager.Domain;
using TargetManager.Services;

namespace TargetManager.API.Controllers
{
    [Route("api/auth/")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IUserService _userService;
        public AuthController(IUserService userService)
        {
            _userService = userService;
        }

        [Route("login")]
        [HttpPost]
        public async Task<IActionResult> Login(LoginViewModel loginViewModel)
        {
            var user = await _userService.Get(loginViewModel.Login, loginViewModel.Password);

            if (user == null)
            {
                return BadRequest("User not found");
            }

            var now = DateTime.UtcNow;

            var jwt = new JwtSecurityToken(
                issuer: AuthOptions.Issuer,
                audience: AuthOptions.Audience,
                notBefore: now,
                expires: now.Add(TimeSpan.FromMinutes(AuthOptions.Lifetime)),
                signingCredentials: new SigningCredentials(AuthOptions.GetSymmetricSecurityKey(), SecurityAlgorithms.HmacSha256));

            var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);

            var response = new
            {
                token = encodedJwt,
                username = user.Login
            };


            return Ok(response);

        }

        [Route("register")]
        [HttpPost]
        public async Task<IActionResult> Register(RegisterViewModel registerViewModel)
        {
            var isEmailFree = await _userService.IsEmailFree(registerViewModel.Email);

            if (!isEmailFree)
            {
                return BadRequest($"user with email: {registerViewModel.Email} already exist");
            }

            var user = await _userService.Get(registerViewModel.Login);

            if (user != null)
            {
                return BadRequest($"user with Login: {registerViewModel.Login} already exist");
            }

            await _userService.Add(registerViewModel.Email, registerViewModel.Login, registerViewModel.Password);

            return Ok();
        }

        [HttpGet]
        public async Task<IActionResult> Logout()
        {
            await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);

            return Ok();
        }

    }
}
