using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace CRUD_CONTATOS_REACT_NET.Models;

public partial class CrudContatosReactNetContext : DbContext
{
    public CrudContatosReactNetContext()
    {
    }

    public CrudContatosReactNetContext(DbContextOptions<CrudContatosReactNetContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Contato> Contatos { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=.;DataBase=CRUD_CONTATOS_REACT_NET;Integrated Security=true; Encrypt=false");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Contato>(entity =>
        {
            entity.HasKey(e => e.IdContato).HasName("PK__Contatos__278E896DCB3ECB3B");

            entity.Property(e => e.IdContato).HasColumnName("idContato");
            entity.Property(e => e.Email)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("email");
            entity.Property(e => e.Nome)
                .HasMaxLength(60)
                .IsUnicode(false)
                .HasColumnName("nome");
            entity.Property(e => e.Phone)
                .HasMaxLength(30)
                .IsUnicode(false)
                .HasColumnName("phone");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
