using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using CRUD_CONTATOS_REACT_NET.Models;
using Microsoft.EntityFrameworkCore;

namespace CRUD_CONTATOS_REACT_NET.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class ContatoController : ControllerBase
    {
        private readonly CrudContatosReactNetContext _db;

        public ContatoController(CrudContatosReactNetContext db)
        {
            _db = db;
        }


        [HttpGet]
        [Route("GetContatos")]
        public async Task<IActionResult> GetContatos()
        {
            List<Contato> lista = await _db.Contatos.ToListAsync();
            return new JsonResult(lista)
            {
                StatusCode = 200,
            };
        }


        [HttpPost]
        [Route("AddContato")]
        public async Task<IActionResult> AddContato([FromBody] Contato request)
        {
            await _db.Contatos.AddAsync(request);
            await _db.SaveChangesAsync();
            return new JsonResult(request)
            {
                StatusCode = 201,
            };
        }


        [HttpDelete]
        [Route("Delete/{id:int}")]
        public async Task<IActionResult> Delete(int id)
        {
            Contato contato = await _db.Contatos.FindAsync(id);

            if (contato == null)
            {
                return NotFound();
            }

            _db.Contatos.Remove(contato);
            await _db.SaveChangesAsync();

            return Ok();
        }


        //[HttpPut]
        //[Route("Editar/{id:int}")]
        //public async Task<IActionResult> Editar(int id)
        //{
        //    Contato contato = await _db.Contatos.FindAsync(id);
            
        //    if (contato == null)
        //    {
        //        return NotFound();
        //    }

        //    _db.Contatos.Update(contato);
        //    await _db.SaveChangesAsync();

        //    return Ok();
        //}



    }
}
