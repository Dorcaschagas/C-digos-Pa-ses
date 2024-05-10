function codiPaises() {
    const paises = [ { "Afeganistão": +93 }, { "Albânia": +355 }, { "Argélia": +213 }, { "Samoa Americana": +1 }, { "Andorra": +376 }, { "Angola": +244 }, { "Anguilla": +1 }, { "Antígua e Barbuda": +1 },
        { "Argentina": +54 }, { "Armênia": +374 }, { "Aruba": +297 }, { "Austrália": +61 }, { "Áustria": +43 }, { "Azerbaijão": +994 }, { "Bahamas": +1 }, { "Bahrein": +973 }, { "Bangladesh": +880 },
        { "Barbados": +1 }, { "Belarus": +375 }, { "Bélgica": +32 }, { "Belize": +501 }, { "Benin": +229 }, { "Bermudas": +1 }, { "Butão": +975 }, { "Bolívia": +591 }, { "Bósnia e Herzegovina": +387 },
        { "Botsuana": +267 }, { "Território Britânico do Oceano Índico": +246 }, { "Brasil": +55 }, { "Ilhas Virgens Britânicas": +1 }, { "Brunei": +673 }, { "Bulgária": +359 }, { "Burkina Faso": +226 }, 
        { "Burundi": +257 },  { "Camboja": +855 }, { "Camarões": +237 }, { "Canadá": +1 }, { "Cabo Verde": +238 }, { "Ilhas Cayman": +1 }, { "República Centro-Africana": +236 }, { "Chade": +235 }, { "Chile": +56 },
        { "China": +86 }, { "Ilha do Natal": +61 }, { "Ilhas Cocos (Keeling})": +61 }, { "Colômbia": +57 }, { "Comores": +269 }, { "República Democrática do} Congo": +243 }, { "República do Congo": +242 }, { "Ilhas Cook": +682 },
        { "Costa Rica": +506 }, { "Costa do Marfim": +225 }, { "Croácia": +385 }, { "Cuba": +53 }, { "Curaçao": +599 }, { "Chipre": +357 }, { "República Checa": +420 }, { "Dinamarca": +45 },
        { "Djibouti": +253 }, { "Dominica": +1 }, { "República Dominicana": +1 }, { "Timor-Leste": +670 }, { "Equador": +593 }, { "Egito": +20 }, { "El Salvador": +503 }, { "Guiné Equatorial": +240 },
        { "Eritreia": +291 }, { "Estônia": +372 }, { "Etiópia": +251 }, { "Ilhas Falkland": +500 }, { "Ilhas Faroe": +298 }, { "Fiji": +679 }, { "Finlândia": +358 }, { "França": +33 },
        { "Guiana Francesa": +594 }, { "Polinésia Francesa": +689 }, { "Gabão": +241 }, { "Gâmbia": +220 }, { "Geórgia": +995 }, { "Alemanha": +49 }, { "Gana": +233 }, { "Gibraltar": +350 },
        { "Grécia": +30 }, { "Groenlândia": +299 }, { "Granada": +1 }, { "Guadalupe": +590 }, { "Guam": +1 }, { "Guatemala": +502 }, { "Guernsey": +44 }, { "Guiné": +224 },
        { "Guiné-Bissau": +245 }, { "Guiana": +592 }, { "Haiti": +509 }, { "Honduras": +504 }, { "Hong Kong": +852 }, { "Hungria": +36 }, { "Islândia": +354 }, { "Índia": +91 },
        { "Indonésia": +62 }, { "Irã": +98 }, { "Iraque": +964 }, { "Irlanda": +353 }, { "Ilha de Man": +44 }, { "Israel": +972 }, { "Itália": +39 }, { "Jamaica": +1 },
        { "Japão": +81 }, { "Jersey": +44 }, { "Jordânia": +962 }, { "Cazaquistão": +7 }, { "Quênia": +254 }, { "Kiribati": +686 }, { "Kosovo": +383 }, { "Kuwait": +965 }, { "Quirguistão": +996 },
        { "Laos": +856 }, { "Letônia": +371 }, { "Líbano": +961 }, { "Lesoto": +266 }, { "Libéria": +231 }, { "Líbia": +218 }, { "Liechtenstein": +423 }, { "Lituânia": +370 }, { "Luxemburgo": +352 }, 
        { "Macau": +853 }, { "Macedônia do Norte": +389 }, { "Madagascar": +261 }, { "Malaui": +265 }, { "Malásia": +60 }, { "Maldivas": +960 }, { "Mali": +223 }, { "Malta": +356 }, { "Ilhas Marshall": +692 },
        { "Martinica": +596 }, { "Mauritânia": +222 }, { "Maurício": +230 }, { "Mayotte": +262 }, { "México": +52 }, { "Micronésia": +691 }, { "Moldávia": +373 }, { "Mônaco": +377 }, { "Mongólia": +976 },
        { "Montenegro": +382 }, { "Montserrat": +1 }, { "Marrocos": +212 }, { "Moçambique": +258 }, { "Mianmar": +95 }, { "Namíbia": +264 }, { "Nauru": +674 }, { "Nepal": +977 }, { "Países Baixos": +31 }, { "Antilhas Holandesas": +599 },
        { "Nova Caledônia": +687 }, { "Nova Zelândia": +64 }, { "Nicarágua": +505 }, { "Níger": +227 }, { "Nigéria": +234 }, { "Niue": +683 }, { "Ilha Norfolk": +672 }, { "Coreia do Norte": +850 }, { "Ilhas Marianas do} Norte": +1 }, { "Noruega": +47 },
        { "Omã": +968 }, { "Paquistão": +92 }, { "Palau": +680 }, { "Palestina": +970 }, { "Panamá": +507 }, { "Papua-Nova Guiné": +675 }, { "Paraguai": +595 }, { "Peru": +51 }, { "Filipinas": +63 }, { "Ilhas Pitcairn": +64 },
        { "Polônia": +48 }, { "Portugal": +351 }, { "Porto Rico": +1 }, { "Catar": +974 }, { "Reunião": +262 }, { "Romênia": +40 }, { "Rússia": +7 }, { "Ruanda": +250 },{ "São Bartolomeu": +590 },  { "Santa Helena": +290 }, 
        { "São Cristóvão e Nevis": +1 }, { "Santa Lúcia": +1 }, { "São Martinho": +590 }, { "São Pedro e Miquelão": +508 }, { "São Vicente e Granadinas": +1 }, { "Samoa": +685 }, { "San Marino": +378 },
        { "São Tomé e Príncipe": +239 }, { "Arábia Saudita": +966 }, { "Senegal": +221 }, { "Sérvia": +381 }, { "Seychelles": +248 }, { "Serra Leoa": +232 }, { "Cingapura": +65 }, { "Sint Maarten": +1 },
        { "Eslováquia": +421 }, { "Eslovênia": +386 }, { "Ilhas Salomão": +677 }, { "Somália": +252 }, { "África do Sul": +27 }, { "Coreia do Sul": +82 }, { "Sudão do Sul": +211 }, { "Espanha": +34 }, { "Sri Lanka": +94 }, { "Sudão": +249 }, { "Suriname": +597 }, { "Suazilândia": +268 }, { "Suécia": +46 }, { "Suíça": +41 }, { "Síria": +963 }, { "Taiwan": +886 },
        { "Tajiquistão": +992 }, { "Tanzânia": +255 }, { "Tailândia": +66 }, { "Togo": +228 }, { "Tokelau": +690 }, { "Tonga": +676 }, { "Trinidad e Tobago": +1 }, { "Tunísia": +216 }, { "Turquia": +90 },
        { "Turcomenistão": +993 }, { "Ilhas Turcas e Caicos": +1 }, { "Tuvalu": +688 }, { "Uganda": +256 }, { "Ucrânia": +380 }, { "Emirados Árabes Unidos": +971 }, { "Reino Unido": +44 }, { "Estados Unidos": +1 }, 
        { "Uruguai": +598 }, { "Uzbequistão": +998 }, { "Vanuatu": +678 }, { "Vaticano": +379 }, { "Venezuela": +58 }, { "Vietnã": +84 }, { "Wallis e Futuna": +681 }, { "Iêmen": +967 }, { "Zâmbia": +260 }, { "Zimbábue": +263 }
    ]

    paises.forEach(element => {
        var nome = Object.keys(element)[0];
        var cod = element[nome];
        var nomeCod = `${nome} +${cod}`
        $("#codPais").append(`<option value="${cod}">${nomeCod}</option>`)
    });
}

$("#codPais").append(`<option selected value="55">Brasil +55</option>`)
codiPaises();