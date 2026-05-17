grammar Formulario;

//Gramática 
prog: formulario+;

formulario: FORMULARIO id LLAVEIZQ (campo)* LLAVEDER;

id: ID;
campo: id DOSPUNTOS tipo (IGUAL valor)? PUNTOYCOMA;
  tipo: (TEXTO | NUMERO | BOOLEANO);
  valor: (cadena | numero | booleano);
  booleano: (VERDADERO | FALSO);
  cadena: (caracter)* ;
     caracter: CARACTER;
  numero: DIGITO;  


//Lexemas
FORMULARIO: 'formulario';
TEXTO: 'texto';
NUMERO: 'numero';
BOOLEANO: 'booleano';
VERDADERO: 'verdadero';
FALSO: 'falso';
DOSPUNTOS: ':';
LLAVEDER: '}';
LLAVEIZQ: '{';
PUNTOYCOMA: ';';
IGUAL: '=';
COMILLAS: '"';
ID: [a-zA-Z]+;
DIGITO: [0-9]+;
CARACTER : COMILLAS ~["\r\n]* COMILLAS ;
WS: [ \t\r\n]+ -> skip ;