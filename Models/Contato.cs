using System;
using System.Collections.Generic;

namespace CRUD_CONTATOS_REACT_NET.Models;

public partial class Contato
{
    public int IdContato { get; set; }

    public string? Nome { get; set; }

    public string? Email { get; set; }

    public string? Phone { get; set; }
}
