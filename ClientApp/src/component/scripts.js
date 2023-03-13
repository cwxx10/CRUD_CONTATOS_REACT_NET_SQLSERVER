
$('button#abrir-modal').click(function () {
   
    var modal = $('<div class="modal">\
                   <h2>Preencha as informações</h2>\
                   <form>\
                     <label for="nome">Nome:</label>\
                     <input type="text" id="nome" name="nome">\
                     <label for="email">Email:</label>\
                     <input type="email" id="email" name="email">\
                     <label for="telefone">Telefone:</label>\
                     <input type="tel" id="telefone" name="telefone">\
                     <button type="submit" id="salvar">Salvar</button>\
                     <button type="button" id="fechar">Fechar</button>\
                   </form>\
                 </div>');
    $('body').append(modal);

    modal.find('#fechar').click(function () {
        modal.remove();
    });

    
    modal.find('#salvar').click(function (e) {
        e.preventDefault();

        var nome = modal.find('#nome').val(),
            email = modal.find('#email').val(),
            telefone = modal.find('#telefone').val();

       
        $.ajax({
            url: '/salvar-informacoes.php',
            method: 'POST',
            data: { nome: nome, email: email, telefone: telefone },
            success: function (response) {
                console.log('Dados salvos com sucesso!');
                modal.remove();
            },
            error: function (xhr, status, error) {
                console.error(error);
            }
        });
    });
});
