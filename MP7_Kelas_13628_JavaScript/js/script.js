function fn_ValForm() {
    // var form = document.forms["myForm"];
    var nama=document.getElementById("nama").value
    var email = document.getElementById("email").value;
    var umur = document.getElementById("umur").value;
    var kategori = document.getElementById("kategori").value;
    var pilihan;
    var email_kecil = "/^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$/"
    var sMsg= "";
            if(nama == ""){
                sMsg += "Anda belum mengisikan nama\n";
            }
            if(email == ""){
                sMsg += "Anda belum mengisikan email\n";
            }else if(!email_kecil.test(email)){
                sMsg += "Email wajib pakai huruf kecil !"
            }
            if(umur == ""){
                sMsg += "Anda belum mengisikan umur\n";
            }else{
                if(umur <= 25){
                    info = "Paket pelajar";
                }else {
                    info = "Paket umum";
                }
                
            }
            if(kategori == ""){
                sMsg += "Anda belum mengisikan kategori\n";
            }
            if (sMsg != ""){
                alert("Peringatan:\n" + sMsg);
                return false;
            }
            switch (pilihan) {
            case "S":
                pilihan = "Kategori tipe Silver";
                break;
            case "G":
                pilihan = "Kategori tipe Gold";
                break;
            case "P":
                pilihan = "Platinum";
                break;
            default:
                alert("Kategori tidak valid");  
                break;
        }
        alert("Terima kasih " + nama + " ! Anda terdaftar di paket " + pilihan + info);
        return true;
    }       
