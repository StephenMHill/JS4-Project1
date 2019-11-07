
// function wilhelm(event)
// {
//         console.log("what is wrong");
//         event.stopPropagation(); 
//         let audio = new Audio('../audio/dead.mp3');
//         audio.play();
// }

// $(".feat_one").on("click", wilhelm);
// console.log("seriously");


let attempt = 3; // Variable to count number of attempts.

// Below function Executes on click of login button.
function validate()
{
        let username = $("#username").val();
        let password = $("#password").val();
        if ( username == "shill" && password == "password")
        {
                
                alert ("Login successfully");
                $('#form_id').hide();
                $("#loginout" ).append( "<p>Welcome " + username + "</p>" );
                
        }
        else
        {
               
                attempt --;// Decrementing by one.
                alert("You have left "+attempt+" attempt;");
                // Disabling fields after 3 attempts.
                if( attempt == 0)
                {
                        $("#username").prop('disabled', true);
                       $("#password").prop('disabled', true);
                        $("#submit").prop('disabled', true);
                        return false;
                }
        }
}
      