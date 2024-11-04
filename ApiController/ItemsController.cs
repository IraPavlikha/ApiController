using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

[Route("api/[controller]")]
[ApiController]
public class ItemsController : ControllerBase
{
    private static readonly List<string> Items = new List<string>
    {
        "Яблуко", "Банан", "Груша", "Апельсин", "Ківі", "Вишня",
        "Мандарин", "Персик", "Слива", "Диня", "Кавун", "Лимон",
        "Малина", "Чорниця", "Суниця", "Гранат", "Фінік", "Кокос"
    };

    [HttpGet]
    public IActionResult GetItems(int page = 1, int pageSize = 5)
    {
        var totalItems = Items.Count;
        var totalPages = (int)System.Math.Ceiling(totalItems / (double)pageSize);
        var pagedItems = Items.Skip((page - 1) * pageSize).Take(pageSize).ToList();

        return Ok(new
        {
            TotalItems = totalItems,
            TotalPages = totalPages,
            CurrentPage = page,
            Items = pagedItems
        });
    }
}