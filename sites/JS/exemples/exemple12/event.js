
var addressBook = load();

refreshAddressBook(addressBook);

function onClickAddContact()
{
    $('#contact-form').removeClass('hide');
    
   // $('#contact-form').fadeIn('fast');  retire un display none avec un transition fondu au noir
    

}


function onClickSaveContact()
{

    var contact = createContact
    (
        $('select[name=title]').val(),
        $('input[name=firstName]').val(),
        $('input[name=lastName]').val(),
        $('input[name=phone]').val()
    );
    
    
    addressBook.push(contact)
    saveDataToDomStorage('contacts', addressBook);
    
    refreshAddressBook(addressBook)
}
var addressBook = load();

refreshAddressBook(addressBook);

function onClickAddContact()
{
    $('#contact-form').removeClass('hide');
    
   // $('#contact-form').fadeIn('fast');  retire un display none avec un transition fondu au noir
    

}


function onClickSaveContact()
{

    var contact = createContact
    (
        $('select[name=title]').val(),
        $('input[name=firstName]').val(),
        $('input[name=lastName]').val(),
        $('input[name=phone]').val()
    );
    
    
    addressBook.push(contact)
    saveDataToDomStorage('contacts', addressBook);
    
    refreshAddressBook(addressBook)
}
