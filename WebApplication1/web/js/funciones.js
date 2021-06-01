/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function(){
    $("tr #btnDelete").click(function(){
        var idp=$(this).parent().find("#idp").val();
        swal({
          title: "Are you sure?",
          text: "Once deleted, you will not be able to recover this imaginary file!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                eliminar(idp);
                swal("Poof! Your imaginary file has been deleted!", {
                  icon: "success",
                }).then((willDelete)=>{
                    if(willDelete){
                        parent.location.href="Controlador?accion=carrito";
                    }
                })
            } else {
                swal("Registro no eliminado");
            }
        });
        eliminar(idp);
    });
    function eliminar(idp){
        var url="Controlador?accion=Delete";
        $.ajax({
            type:'POST',
            url: url,
            data: "idp= "+idp,
            succes:function(data, textStatus, jqXHR){
            }
        })
    }
});

