const roles = [ "Городничий", "Аммос Федорович", "Артемий Филиппович", "Лука Лукич"];
const text = "Городничий: Я пригласил вас, господа, с тем, чтобы сообщить вам пренеприятное известие: к нам едет ревизор.\n\n" +
             "              Аммос Федорович: Как ревизор?\n\n" +
             "              Артемий Филиппович: Как ревизор?\n\n" + 
             "              Городничий: Ревизор из Петербурга, инкогнито. И еще с секретным предписаньем.\n\n" +
             "              Аммос Федорович: Вот те на!\n\n" +
             "              Артемий Филиппович: Вот не было заботы, так подай!\n\n" +
             "              Лука Лукич: Господи боже! еще и с секретным предписаньем!";

const replicas = text.split("\n").filter(element => element != "");
replicas.forEach((element, index, arr) => arr[index] = element.trim());

const allReplicas = document.getElementById("all-replicas");
replicas.forEach(element => allReplicas.innerHTML += element + "<br><br>");

findReplica("", show);

function findReplica(role, display){
    document.getElementById("private-replica").innerHTML = "";
    if(role){
        display(role + ":");
        iterateReplicas(role);
    }
    else{
        roles.forEach(role => {
            display(role + ":");
            iterateReplicas(role);
        });
    }
    
    function iterateReplicas(role){
        replicas.forEach((replica, index) => {
            if(replica.startsWith(role)){
                display(index + 1 + ". " + replica.slice(replica.indexOf(": ") + 2));
            }
        });
    }
};

function show(text){
        document.getElementById("private-replica").innerHTML += text + "<br><br>";
};