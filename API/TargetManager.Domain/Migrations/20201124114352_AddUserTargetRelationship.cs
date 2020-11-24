using Microsoft.EntityFrameworkCore.Migrations;

namespace TargetManager.Domain.Migrations
{
    public partial class AddUserTargetRelationship : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "Targets",
                nullable: true,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Targets_UserId",
                table: "Targets",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Targets_Users_UserId",
                table: "Targets",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Targets_Users_UserId",
                table: "Targets");

            migrationBuilder.DropIndex(
                name: "IX_Targets_UserId",
                table: "Targets");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Targets");
        }
    }
}
