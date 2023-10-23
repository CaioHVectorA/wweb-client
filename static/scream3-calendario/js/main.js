const selectElement  = document.getElementById("salas");
const headerMaterias = document.getElementById("header-materias");
const horariosMaterias = document.getElementById("horario-materias");
const materiasMaterias = document.getElementById("materia-materias");
const imgProfessor = document.getElementById("img-prof");

selectElement.addEventListener("change", function() {
    const selectedValue = selectElement.value;

    switch (selectedValue) {
        case "1":
            headerMaterias.textContent = "1001";
            horariosMaterias.textContent = "11:30 - 13:00";
            materiasMaterias.textContent = "matematica";
            imgProfessor.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1bGkA07dWC4LqMohSysfiRN9as0NC-aBWxA&usqp=CAU";
            break;
        case "2":
            headerMaterias.textContent = "1002";
            horariosMaterias.textContent = "10:30 - 12:05";
            materiasMaterias.textContent = "cultura de jogos";
            imgProfessor.src = "https://img.r7.com/images/nicolas-cage-superman2jpg-25092020161039782?dimensions=299x417&&&&&&&&&resize=299x417&crop=437x609+0+0";
            break;
        case "3":
            headerMaterias.textContent = "1003";
            horariosMaterias.textContent = "qwq";
            materiasMaterias.textContent = "biologia";
            imgProfessor.src = "https://jornalarua.com/wp-content/uploads/2022/03/gerson-pessoa.jpg";
            break;
        case "4":
            headerMaterias.textContent = "1004";
            horariosMaterias.textContent = "10wqevq01";
            materiasMaterias.textContent = "quimica";
            imgProfessor.src = "https://i1.sndcdn.com/artworks-TyiS74JXtNSzvhci-SDskMg-t500x500.jpg";
            break;
        case "21":
            headerMaterias.textContent = "2001";
            horariosMaterias.textContent = "qwevq";
            materiasMaterias.textContent = "fisica";
            imgProfessor.src = "https://st3.depositphotos.com/5061925/13000/i/450/depositphotos_130009456-stock-photo-young-man-in-studio.jpg";
            break;
        case "22":
            headerMaterias.textContent = "2002";
            horariosMaterias.textContent = "wqevwvqwrvq";
            materiasMaterias.textContent = "portuges";
            imgProfessor.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYfOGa1iFxhAvl6sdPSrXGEcLpH_92CAimaDylwscK9e83lYOvfHj9BUT0TpDRADyRbDQ&usqp=CAU";
            break;
        case "23":
            headerMaterias.textContent = "2003";
            horariosMaterias.textContent = "1qwvqwv001";
            materiasMaterias.textContent = "ingles";
            imgProfessor.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFM5L6QG-M1zwvKrCZmVFeXdeDLzG1XzPoyW-AvM6U2rKCtOjLNpIS1DMtTlrmptMneVI&usqp=CAU";
            break;
        case "24":
            headerMaterias.textContent = "2004";
            horariosMaterias.textContent = "100vwqveqdass1";
            materiasMaterias.textContent = "quimica";
            imgProfessor.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSESAlfySME549JcMN6cQQQ4AdaDCDTgBxsc4o-qQoCgtmp3_HDBqViIAokGG1odJX2r1M&usqp=CAU";
            break;
        case "31":
            headerMaterias.textContent = "3001";
            horariosMaterias.textContent = "10sadavwrv01";
            materiasMaterias.textContent = "retardo";
            imgProfessor.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUsO5ZGCtmZvjSxamWSzmuFw5GENBb-htBjW8U-7x21hCd-IVNtudDkzR8UOugQUZMkL0&usqp=CAU";
            break;
        case "32":
            headerMaterias.textContent = "3002";
            horariosMaterias.textContent = "vasdvwewrv";
            materiasMaterias.textContent = "jonas";
            imgProfessor.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWfGbDEUr3Ww4C-rDWDQzvvEE60EQxyJt603XzAHbuqncwhrc-qdjKuzRxMtJ6eUJwgGM&usqp=CAU";
            break;
        case "33":
            headerMaterias.textContent = "3003";
            horariosMaterias.textContent = "dvasdvr";
            materiasMaterias.textContent = "cleber";
            imgProfessor.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe2E7SAhuMBhzjgyh-U8uXxBlfpgtmSNLcIZr5oPmKcYazvWuEUTEvcyAH0nlIjtGjKoM&usqp=CAU";
            break;
        case "34":
            headerMaterias.textContent = "3004";
            horariosMaterias.textContent = "1012401";
            materiasMaterias.textContent = "abacaxi";
            imgProfessor.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIBaVE68CqLZKTVHtlRhrqGT0nbr3hHVDQXCBCtPox7Oi37pfiyU603SXdChp2Pwg9-Ow&usqp=CAU";
            break;
        default:
            headerMaterias.textContent = "1001";
            horariosMaterias.textContent = "4123412";
            materiasMaterias.textContent = "nn sei ";
            imgProfessor.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnyFlJ_5nOPlSac2ArX1JjPEtS1U3MQg5lbZGD3DeqaFh0XmzeTkD2Pd_wPqcMjPQq_TQ&usqp=CAU";
    }
});


