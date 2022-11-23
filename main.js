/*ar Selic = [];
var soma = 0

const fev12 = .75;
const mar12 = .82;
const abr12 = .71;
const mai12 = .74;
const jun12 = .64;
const jul12 = .68;
const ago12 = .69;
const set12 = .54;
const out12 = .61;
const nov12 = .55;
const dez12 = .55;
const jan13 = .60;
const fev13 = .49;
const mar13 = .55;
const abr13 = .61;
const mai13 = .60;
const jun13 = .61;
const jul13 = .72;
const ago13 = .71;
const set13 = .71;
const out13 = .81;
const nov13 = .72;
const dez13 = .79;
const jan14 = .85;
const fev14 = .79;
const mar14 = .77;
const abr14 = .82;
const mai14 = .87;
const jun14 = .82;
const jul14 = .95;
const ago14 = .87;
const set14 = .91;
const out14 = .95;
const nov14 = .84;
const dez14 = .96;
const jan15 = .94;
const fev15 = .82;
const mar15 = 1.04;
const abr15 = .95;
const mai15 = .99;
const jun15 = 1.07;
const jul15 = 1.18;
const ago15 = 1.11;
const set15 = 1.11;
const out15 = 1.11;
const nov15 = 1.06;
const dez15 = 1.16;
const jan16 = 1.06;
const fev16 = 1.00;
const mar16 = 1.16;
const abr16 = 1.06;
const mai16 = 1.11;
const jun16 = 1.16;
const jul16 = 1.11;
const ago16 = 1.22;
const set16 = 1.11;
const out16 = 1.05;
const nov16 = 1.04;
const dez16 = 1.12;
const jan17 = 1.09;
const fev17 = .87;
const mar17 = 1.05;
const abr17 = .79;
const mai17 = .93;
const jun17 = .81;
const jul17 = .80;
const ago17 = .80;
const set17 = .64;
const out17 = .64;
const nov17 = .57;
const dez17 = .54
const jan18 = .58;
const fev18 = .47;
const mar18 = .53;
const abr18 = .52;
const mai18 = .52;
const jun18 = .52;
const jul18 = .54;
const ago18 = .57;
const set18 = .47;
const out18 = .54;
const nov18 = .49;
const dez18 = .49
const jan19 = .54;
const fev19 = .49;
const mar19 = .47;
const abr19 = .52;
const mai19 = .54;
const jun19 = .47;
const jul19 = .57;
const ago19 = .50;
const set19 = .46;
const out19 = .48;
const nov19 = .38;
const dez19 = .37;
const jan20 = .38;
const fev20 = .29;
const mar20 = .34;
const abr20 = .28;
const mai20 = .24;
const jun20 = .21;
const jul20 = .19;
const ago20 = .16;
const set20 = .16;
const out20 = .16;
const nov20 = .15;
const dez20 = .16;
const jan21 = .15;
const fev21 = .13;
const mar21 = .20;
const abr21 = .21;
const mai21 = .27;
const jun21 = .31;
const jul21 = .36;
const ago21 = .43;
const set21 = .44;
const out21 = .49;
const nov21 = .59;
const dez21 = .77;
const jan22 = .73;
const fev22 = .76;
const mar22 = .93;
const abr22 = .83;
const mai22 = 1.03;
const jun22 = 1.02;
const jul22 = 1.03;
const ago22 = 1.17;
const set22
const out22
const nov22
const dez22

Selic.push(fev12);
Selic.push(mar12);
Selic.push(abr12);
Selic.push(mai12);
Selic.push(jun12);
Selic.push(jul12);
Selic.push(ago12);
Selic.push(set12);
Selic.push(out12);
Selic.push(nov12);
Selic.push(dez12);
Selic.push(jan13);
Selic.push(fev13);
Selic.push(mar13);
Selic.push(abr13);
Selic.push(mai13);
Selic.push(jun13);
Selic.push(jul13);
Selic.push(ago13);
Selic.push(set13);
Selic.push(out13);
Selic.push(nov13);
Selic.push(dez13);
Selic.push(jan14);
Selic.push(fev14);
Selic.push(mar14);
Selic.push(abr14);
Selic.push(mai14);
Selic.push(jun14);
Selic.push(jul14);
Selic.push(ago14);
Selic.push(set14);
Selic.push(out14);
Selic.push(nov14);
Selic.push(dez14);
Selic.push(jan15);
Selic.push(fev15);
Selic.push(mar15);
Selic.push(abr15);
Selic.push(mai15);
Selic.push(jun15);
Selic.push(jul15);
Selic.push(ago15);
Selic.push(set15);
Selic.push(out15);
Selic.push(nov15);
Selic.push(dez15);
Selic.push(jan16);
Selic.push(fev16);
Selic.push(mar16);
Selic.push(abr16);
Selic.push(mai16);
Selic.push(jun16);
Selic.push(jul16);
Selic.push(ago16);
Selic.push(set16);
Selic.push(out16);
Selic.push(nov16);
Selic.push(dez16);
Selic.push(jan17);
Selic.push(fev17);
Selic.push(mar17);
Selic.push(abr17);
Selic.push(mai17);
Selic.push(jun17);
Selic.push(jul17);
Selic.push(ago17);
Selic.push(set17);
Selic.push(out17);
Selic.push(nov17);
Selic.push(dez17);
Selic.push(jan18);
Selic.push(fev18);
Selic.push(mar18);
Selic.push(abr18);
Selic.push(mai18);
Selic.push(jun18);
Selic.push(jul18);
Selic.push(ago18);
Selic.push(set18);
Selic.push(out18);
Selic.push(nov18);
Selic.push(dez18);
Selic.push(jan19);
Selic.push(fev19);
Selic.push(mar19);
Selic.push(abr19);
Selic.push(mai19);
Selic.push(jun19);
Selic.push(jul19);
Selic.push(ago19);
Selic.push(set19);
Selic.push(out19);
Selic.push(nov19);
Selic.push(dez19);
Selic.push(jan20);
Selic.push(fev20);
Selic.push(mar20);
Selic.push(abr20);
Selic.push(mai20);
Selic.push(jun20);
Selic.push(jul20);
Selic.push(ago20);
Selic.push(set20);
Selic.push(out20);
Selic.push(nov20);
Selic.push(dez20);
Selic.push(jan21);
Selic.push(fev21);
Selic.push(mar21);
Selic.push(abr21);
Selic.push(mai21);
Selic.push(jun21);
Selic.push(jul21);
Selic.push(ago21);
Selic.push(set21);
Selic.push(out21);
Selic.push(nov21);
Selic.push(dez21);
Selic.push(jan22);
Selic.push(fev22);
Selic.push(mar22);
Selic.push(abr22);
Selic.push(mai22);
Selic.push(jun22);
Selic.push(jul22);
Selic.push(ago22);
/*Selic.push(set22);
elic.push(out22);
Selic.push(nov22);
Selic.push(dez22);

//SAFEV12 = SelicAcumuladaFevereiro12

var SAFEV12 = Selic.reduce(function (soma, i) {
    return soma + i
});

//
Selic.shift();

var SAMAR12 = Selic.reduce(function (soma, i) {
    return soma + i
});

//
Selic.shift();

var SAABR12 = Selic.reduce(function (soma, i) {
    return soma + i
});

//
Selic.shift();

var SAMAI12 = Selic.reduce(function (soma, i) {
    return soma + i
});

//
Selic.shift();

var SAMAI12 = Selic.reduce(function (soma, i) {
    return soma + i
});

//
Selic.shift();

var SAJUN12 = Selic.reduce(function (soma, i) {
    return soma + i
});

//
Selic.shift();

var SAJUL12 = Selic.reduce(function (soma, i) {
    return soma + i
});

//
Selic.shift();

var SAAGO12 = Selic.reduce(function (soma, i) {
    return soma + i
});

//
Selic.shift();

var SASET12 = Selic.reduce(function (soma, i) {
    return soma + i
});

//
Selic.shift();

var SAOUT12 = Selic.reduce(function (soma, i) {
    return soma + i
});

//
Selic.shift();

var SANOV12 = Selic.reduce(function (soma, i) {
    return soma + i
});

//
Selic.shift();

var SADEZ12 = Selic.reduce(function (soma, i) {
    return soma + i
});

//
Selic.shift();

var SAJAN13 = Selic.reduce(function (soma, i) {
    return soma + i
});

//
Selic.shift();

var SAFEV13 = Selic.reduce(function (soma, i){
    return soma + i
});

//
Selic.shift();

var SAMAR13 = Selic.reduce(function (soma, i){
    return soma + i
});

//
Selic.shift()

var SAABR13 = Selic.reduce(function (soma, i){
    return soma + i
});

//
Selic.shift();

var SAMAI13 = Selic.reduce(function (soma, i){
    return soma + i
});

//
Selic.shift()

var SAJUN13 = Selic.reduce(function (soma, i){
    return soma + i
});

//
Selic.shift();

var SAJUL13 = Selic.reduce(function (soma, i){
    return soma + i
});

//
Selic.shift();

var SAAGO13 = Selic.reduce(function (soma, i){
    return soma + i
});

//
Selic.shift();

var SASET13 = Selic.reduce(function (soma, i){
    return soma + i
});

//
Selic.shift();

var SAOUT13 = Selic.reduce(function (soma, i){
    return soma + i
});

//
Selic.shift();

var SANOV13 = Selic.reduce(function (soma, i){
    return soma + i
});

//
Selic.shift();

var SADEZ13 = Selic.reduce(function (soma, i){
    return soma + i
});

//
Selic.shift();

var SAJAN14 = Selic.reduce(function (soma, i){
    return soma + i
});

//
Selic.shift();

var SAFEV14 = Selic.reduce(function (soma, i){
    return soma + i
});

//
Selic.shift();

var SAMAR14 = Selic.reduce(function (soma, i){
    return soma + i
});

//
Selic.shift();

var SAABR14 = Selic.reduce(function (soma, i){
    return soma + i
});

//
Selic.shift();

var SAMAI14 = Selic.reduce(function (soma, i){
    return soma + i
});

//
Selic.shift();

var SAJUN14 = Selic.reduce(function (soma, i){
    return soma + i
});

//
Selic.shift();

var SAJUL14 = Selic.reduce(function (soma, i){
    return soma + i
});

//
Selic.shift();

var SAAGO14 = Selic.reduce(function (soma, i){
    return soma + i
});

//
Selic.shift();

var SASET14 = Selic.reduce(function (soma, i){
    return soma + i
});

//
Selic.shift();

var SAOUT14 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SANOV14 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SADEZ14 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SAJAN15 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SAFEV15 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SAMAR15 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SAABR15 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SAMAI15 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SAJUN15 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SAJUL15 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SAAGO15 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SASET15 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SAOUT15 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SANOV15 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SADEZ15 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SAJAN16 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SAFEV16 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SAMAR16 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SAABR16 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SAMAI16 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SAJUN16 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SAJUL16 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SAAGO16 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SASET16 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SAOUT16 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SANOV16 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SADEZ16 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SAJAN17 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SAFEV17 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SAMAR17 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SAABR17 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SAMAI17 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SAJUN17 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SAJUL17 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SAAGO17 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SASET17 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SAOUT17 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SANOV17 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SADEZ17 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SAJAN18 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SAFEV18 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SAMAR18 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SAABR18 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SAMAI18 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SAJUN18 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SAJUL18 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SAAGO18 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SASET18 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SAOUT18 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SANOV18 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SADEZ18 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SAJAN19 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SAFEV19 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SAMAR19 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SAABR19 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SAMAI19 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SAJUN19 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SAJUL19 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SAAGO19 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SASET19 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SAOUT19 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SANOV19 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SADEZ19 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SAJAN20 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SAFEV20 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SAMAR20 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SAABR20 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SAMAI20 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SAJUN20 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SAJUL20 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SAAGO20 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SASET20 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SAOUT20 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SANOV20 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SADEZ20 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SAJAN21 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SAFEV21 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SAMAR21 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SAABR21 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SAMAI21 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SAJUN21 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SAJUL21 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SAAGO21 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SASET21 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SAOUT21 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SANOV21 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SADEZ21 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SAJAN22 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SAFEV22 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SAMAR22 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SAABR22 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SAMAI22 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SAJUN22 = Selic.reduce(function (soma, i){
    return soma + i
});

Selic.shift();

var SAJUL22 = Selic.reduce(function (soma, i){
    return soma + i
}); */

const Associações = {
 DREMaringa: [
    'Alto Parana',
    'Amapora',
    'Ângulo',
    'Astorga',
    'Atalaia',
    'Colorado',
    'Cruzeiro Do Sul',
    'Diamante Do Norte',
    'Doutor Camargo',
    'Florai',
    'Floresta',
    'Florida',
    'Guairaca',
    'Iguaracu',
    'Inaja',
    'Itaguaje',
    'Itambe',
    'Itauna Do Sul',
    'Ivatuba',
    'Jardim Olinda',
    'Loanda',
    'Lobato',
    'Mandaguacu',
    'Mandaguari',
    'Marialva',
    'Marilena',
    'Maringá',
    'Mirador',
    'Munhoz De Mello',
    'Nossa Senhora Das Gracas',
    'Nova Alianca Do Ivai',
    'Nova Esperanca',
    'Nova Londrina',
    'Ourizona',
    'Paicandu',
    'Paraiso Do Norte',
    'Paranacity',
    'Paranapoema',
    'Paranavai',
    'Planaltina Do Parana',
    'Porto Rico',
    'Presidente Castelo Branco',
    'Querencia Do Norte',
    'Santa Cruz Do Monte Castelo',
    'Santa Fe',
    'Santa Ines',
    'Santa Isabel Do Ivai',
    'Santa Monica',
    'Santo Antonio Do Caiua',
    'Santo Inacio',
    'Sao Carlos Do Ivai',
    'Sao Joao Do Caiua',
    'Sao Jorge Do Ivai',
    'Sao Pedro Do Parana',
    'Sarandi',
    'Tamboara',
    'Terra Rica',
    'Uniflor',
  ],
  DRECuritiba: [
    'Adrianopolis',
    'Agudos Do Sul',
    'Almirante Tamandare',
    'Antonina',
    'Araucaria',
    'Balsa Nova',
    'Bocaiuva Do Sul',
    'Campina Grande Do Sul',
    'Campo Do Tenente',
    'Campo Largo',
    'Campo Magro',
    'Cerro Azul',
    'Colombo',
    'Contenda',
    'Curitiba',
    'Doutor Ulysses',
    'Fazenda Rio Grande',
    'Guaraquecaba',
    'Guaratuba',
    'Itaperucu',
    'Lapa',
    'Mandirituba',
    'Matinhos',
    'Morretes',
    'Paranagua',
    'Pien',
    'Pinhais',
    'Piraquara',
    'Pontal Do Parana',
    'Quatro Barras',
    'Quitandinha',
    'Rio Branco Do Sul',
    'Rio Negro',
    'Sao Jose Dos Pinhais',
    'Tijucas Do Sul',
    'Tunas Do Parana',
  ],
  DREPontaGrossa: [
    'Arapoti',
    'Candido De Abreu',
    'Carambei',
    'Castro',
    'Curiuva',
    'Guamiranga',
    'Imbau',
    'Imbituva',
    'Ipiranga',
    'Ivai',
    'Jaguariaiva',
    'Ortigueira',
    'Palmeira',
    'Pirai Do Sul',
    'Ponta Grossa',
    'Porto Amazonas',
    'Reserva',
    'Sapopema',
    'Senges',
    'Telemaco Borba',
    'Tibagi',
    'Ventania',
  ],
  DREGuarapuava: [
    'Antonio Olinto',
    'Bituruna',
    'Boa Ventura De Sao Roque',
    'Campina Do Simao',
    'Candoi',
    'Cantagalo',
    'Cruz Machado',
    'Espigao Alto Do Iguacu',
    'Fernandes Pinheiro',
    'Foz Do Jordao',
    'General Carneiro',
    'Goioxim',
    'Guarapuava',
    'Inacio Martins',
    'Irati',
    'Laranjal',
    'Laranjeiras Do Sul',
    'Mallet',
    'Marquinho',
    'Nova Laranjeiras',
    'Palmital',
    'Paula Freitas',
    'Paulo Frontin',
    'Pinhao',
    'Pitanga',
    'Porto Barreiro',
    'Porto Vitoria',
    'Prudentopolis',
    'Reboucas',
    'Reserva Do Iguacu',
    'Rio Azul',
    'Rio Bonito Do Iguacu',
    'Santa Maria Do Oeste',
    'Sao Joao Do Triunfo',
    'Sao Mateus Do Sul',
    'Teixeira Soares',
    'Turvo',
    'Uniao Da Vitoria',
    'Virmond',
  ],
  DREPatoBranco: [
    'Ampere',
    'Barracao',
    'Bela Vista Da Caroba',
    'Boa Esperanca Do Iguacu',
    'Bom Jesus Do Sul',
    'Bom Sucesso Do Sul',
    'Capanema',
    'Chopinzinho',
    'Clevelandia',
    'Coronel Domingos Soares',
    'Coronel Vivida',
    'Cruzeiro Do Iguacu',
    'Dois Vizinhos',
    'Eneas Marques',
    'Flor Da Serra Do Sul',
    'Francisco Beltrao',
    'Honorio Serpa',
    "Itapejara D'Oeste",
    'Manfrinopolis',
    'Mangueirinha',
    'Mariopolis',
    'Marmeleiro',
    'Nova Esperanca Do Sudoeste',
    'Nova Prata Do Iguacu',
    'Palmas',
    'Pato Branco',
    "Perola D'Oeste",
    'Pinhal De Sao Bento',
    'Planalto',
    'Pranchita',
    'Realeza',
    'Renascenca',
    'Salgado Filho',
    'Salto Do Lontra',
    'Santa Izabel Do Oeste',
    'Santo Antonio Do Sudoeste',
    'Sao Joao',
    "Sao Jorge d'Oeste",
    'Saudade Do Iguacu',
    'Sulina',
    'Vere',
    'Vitorino',
  ],
  DRELondrina: [
    'Alvorada Do Sul',
    'Apucarana',
    'Arapongas',
    'Arapua',
    'Ariranha Do Ivai',
    'Assai',
    'Bela Vista Do Paraiso',
    'Bom Sucesso',
    'Borrazopolis',
    'Cafeara',
    'California',
    'Cambe',
    'Cambira',
    'Centenario Do Sul',
    'Congonhinhas',
    'Cornelio Procopio',
    'Cruzmaltina',
    'Faxinal',
    'Florestopolis',
    'Godoy Moreira',
    'Grandes Rios',
    'Guaraci',
    'Ibipora',
    'Ivaipora',
    'Jaguapita',
    'Jandaia Do Sul',
    'Jardim Alegre',
    'Jataizinho',
    'Kalore',
    'Leopolis',
    'Lidianopolis',
    'Londrina',
    'Lunardelli',
    'Lupionopolis',
    'Manoel Ribas',
    'Marilandia Do Sul',
    'Marumbi',
    'Maua Da Serra',
    'Miraselva',
    'Nova America Da Colina',
    'Nova Fatima',
    'Nova Santa Barbara',
    'Novo Itacolomi',
    'Pitangueiras',
    'Porecatu',
    'Prado Ferreira',
    'Primeiro De Maio',
    'Rancho Alegre',
    'Rio Bom',
    'Rio Branco Do Ivai',
    'Rolandia',
    'Rosario Do Ivai',
    'Sabaudia',
    'Santa Cecilia Do Pavao',
    'Santo Antonio Do Paraiso',
    'Sao Jeronimo Da Serra',
    'Sao Joao Do Ivai',
    'Sao Pedro Do Ivai',
    'Sao Sebastiao Da Amoreira',
    'Sertaneja',
    'Sertanopolis',
    'Tamarana',
    'Urai',
  ],
};

function start() {
  var button = document.querySelector('#button');
  button.addEventListener('click', handleButtonClick);

  var inputCidade = document.querySelector('#input-cidade');
  var associacao = document.querySelector('#associacao-result');
  var retroacao = document.querySelector('#retroacao-result');
  var dataLimite = document.querySelector('#data-limite');

  inputCidade.addEventListener('input', handleButtonClick);
  associacao.addEventListener('input', handleButtonClick);
  retroacao.addEventListener('input', handleButtonClick);
  dataLimite.addEventListener('input', handleButtonClick);
  handleButtonClick();
}

function handleButtonClick() {
  var inputCidade = document.querySelector('#input-cidade');
  var associacao = document.querySelector('#associacao-result');
  var retroacao = document.querySelector('#retroacao-result');
  var dataLimite = document.querySelector('#data-limite');
  var qtdMeses = document.querySelector('#qtd-meses');
  var resultado = document.querySelector('#resultado');
  var inputValormedio = document.querySelector('#input-valormedio');

  var valorMedioFatura = Number(inputValormedio.value);
  var cidade = String(inputCidade.value);

  for (var element of Associações.DRECuritiba) {
    if (element === cidade) {
      associacao.innerHTML = '<p>ACINFAZ (Fazenda Rio Grande) </p>';
      retroacao.innerHTML = '<p> 01/11/2014</p>';
      dataLimite.innerHTML = '<p> 01/06/2022</p>';
      qtdMeses.innerHTML = '<p> 91 </p>';
      var meses = 91;
    }
  }

  const MesesCuritiba = 91;

  for (var element of Associações.DREGuarapuava) {
    if (element === cidade) {
      associacao.innerHTML =
        '<p>CDL PUVA (Porto União e União da Vitória) </p>';
      retroacao.innerHTML = '<p>01/08/2015</p>';
      dataLimite.innerHTML = '<p> 01/06/2022</p>';
      qtdMeses.innerHTML = '<p> 82 </p>';
      var meses = 82;
    }
  }

  const MesesGuarapuava = 82;

  for (var element of Associações.DRELondrina) {
    if (element === cidade) {
      associacao.innerHTML = '<p>ACIL (Londrina)</p>';
      retroacao.innerHTML = '<p>01/09/2012</p>';
      dataLimite.innerHTML = '<p> 01/06/2022</p>';
      qtdMeses.innerHTML = '<p> 118 </p>';
      var meses = 118;
    }
  }

 const MesesLondrina = 118;

  for (var element of Associações.DREMaringa) {
    if (element === cidade) {
      associacao.innerHTML = '<p>ACIM (Maringá)</p>';
      retroacao.innerHTML = '<p>01/02/2012</p>';
      dataLimite.innerHTML = '<p> 01/06/2022</p>';
      qtdMeses.innerHTML = '<p> 124 </p>';
      var meses = 124;
    }
  }

  const MesesMaringa = 124;

  for (var element of Associações.DREPatoBranco) {
    if (element === cidade) {
      associacao.innerHTML = '<p>ACEFB (Francisco Beltrão) </p>';
      retroacao.innerHTML = '<p>01/02/2012</p>';
      dataLimite.innerHTML = '<p> 01/06/2022</p>';
      qtdMeses.innerHTML = '<p> 124 </p>';
      var meses = 124;
    }
  }

  const MesesPatoBranco = 124;

  for (var element of Associações.DREPontaGrossa) {
    if (element === cidade) {
      associacao.innerHTML = '<p>ACIPG  (Ponta Grossa)</p>';
      retroacao.innerHTML = '<p>01/04/2014</p>';
      dataLimite.innerHTML = '<p> 01/06/2022</p>';
      qtdMeses.innerHTML = '<p> 98 </p>';
      var meses = 98;
    }

  }



 

  const aliquotaOriginal = 0.29;
  var valorICMSoriginal = valorMedioFatura * aliquotaOriginal;
  var valorPagoOriginal = valorMedioFatura * (1 - aliquotaOriginal);

  const aliquotaTese = 0.18;
  var valorBaseRecalculada = valorPagoOriginal / (1 - aliquotaTese);
  var valorICMSrecalculado = valorBaseRecalculada * aliquotaTese;

  var ValorCreditoMensal = valorICMSoriginal - valorICMSrecalculado;

var ValorCreditoTotal = ValorCreditoMensal * meses;

  var Selic = 1.17/100 * meses;

  var ValorCreditoSelic = ((ValorCreditoTotal * Selic) + ValorCreditoTotal).toFixed(2);

  var total = ValorCreditoSelic;

  //var total = (ValorCredito * meses).toFixed(2);

  if (total > 0) {
    resultado.innerHTML = 'R$' + total;
  } else {
    resultado.innerHTML = '0';
  }

  var ValorRecuperar = 0;

  console.log(ValorCreditoSelic);

  //media selic = 1.17%



  var state = {
    table: [
      valorMedioFatura.toFixed(2),
      '29%',
      valorICMSoriginal.toFixed(2),
      valorPagoOriginal.toFixed(2),
      '18%',
      valorBaseRecalculada.toFixed(2),
      valorICMSrecalculado.toFixed(2),
      ValorCreditoMensal.toFixed(2),
      ValorRecuperar.toFixed(2)
    ],
    board: [
      '    Valor Médio da Fatura    ',
      '  | ',
      '    Alíquota Original    ',
      '  | ',
      '    Valor ICMS Original   ',
      '  |   ',
      '    Valor Pago Original    ',
      '   |  ',
      '    Alíquota Tese    ',
      '    |   ',
      '    Valor da Base Recalculada    ',
      '   |   ',
      '    Valor do ICMS Recalculado    ',
      '   |   ',
      '    Valor do Crédito    ',
      '   |   ',
      '    Valor recuperar    '
    ],
  };

  var divTitulo = document.querySelector('#cabecalho');
  divTitulo.innerHTML = '';

  var ulCabecalho = document.createElement('ul');
  ulCabecalho.classList.add('titulo');

  for (var i = 0; i < state.board.length; i++) {
    var rTitulo = state.board[i];

    var liCabecalho = document.createElement('li');
    liCabecalho.textContent = rTitulo;
    liCabecalho.classList.add('titulos');

    ulCabecalho.appendChild(liCabecalho);
  }

  divTitulo.appendChild(ulCabecalho);

  var divTable = document.querySelector('#render-table');
  divTable.innerHTML = '';

  var ulCalculo = document.createElement('ul');
  ulCalculo.classList.add('numbers');

  for (var i = 0; i < state.table.length; i++) {
    var rTable = state.table[i];

    var liCalculo = document.createElement('li');
    liCalculo.textContent = rTable;
    liCalculo.classList.add('number');

    ulCalculo.appendChild(liCalculo);
  }

  divTable.appendChild(ulCalculo);
}

start();
