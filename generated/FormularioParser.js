// Generated from d:/ParcialSSL/TareaAnalizador/Formulario.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import FormularioListener from './FormularioListener.js';
import FormularioVisitor from './FormularioVisitor.js';

const serializedATN = [4,1,16,67,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,1,0,4,0,22,8,0,11,0,12,0,23,1,1,
1,1,1,1,1,1,5,1,30,8,1,10,1,12,1,33,9,1,1,1,1,1,1,2,1,2,1,3,1,3,1,3,1,3,
1,3,3,3,44,8,3,1,3,1,3,1,4,1,4,1,5,1,5,1,5,3,5,53,8,5,1,6,1,6,1,7,5,7,58,
8,7,10,7,12,7,61,9,7,1,8,1,8,1,9,1,9,1,9,0,0,10,0,2,4,6,8,10,12,14,16,18,
0,2,1,0,2,4,1,0,5,6,62,0,21,1,0,0,0,2,25,1,0,0,0,4,36,1,0,0,0,6,38,1,0,0,
0,8,47,1,0,0,0,10,52,1,0,0,0,12,54,1,0,0,0,14,59,1,0,0,0,16,62,1,0,0,0,18,
64,1,0,0,0,20,22,3,2,1,0,21,20,1,0,0,0,22,23,1,0,0,0,23,21,1,0,0,0,23,24,
1,0,0,0,24,1,1,0,0,0,25,26,5,1,0,0,26,27,3,4,2,0,27,31,5,9,0,0,28,30,3,6,
3,0,29,28,1,0,0,0,30,33,1,0,0,0,31,29,1,0,0,0,31,32,1,0,0,0,32,34,1,0,0,
0,33,31,1,0,0,0,34,35,5,8,0,0,35,3,1,0,0,0,36,37,5,13,0,0,37,5,1,0,0,0,38,
39,3,4,2,0,39,40,5,7,0,0,40,43,3,8,4,0,41,42,5,11,0,0,42,44,3,10,5,0,43,
41,1,0,0,0,43,44,1,0,0,0,44,45,1,0,0,0,45,46,5,10,0,0,46,7,1,0,0,0,47,48,
7,0,0,0,48,9,1,0,0,0,49,53,3,14,7,0,50,53,3,18,9,0,51,53,3,12,6,0,52,49,
1,0,0,0,52,50,1,0,0,0,52,51,1,0,0,0,53,11,1,0,0,0,54,55,7,1,0,0,55,13,1,
0,0,0,56,58,3,16,8,0,57,56,1,0,0,0,58,61,1,0,0,0,59,57,1,0,0,0,59,60,1,0,
0,0,60,15,1,0,0,0,61,59,1,0,0,0,62,63,5,15,0,0,63,17,1,0,0,0,64,65,5,14,
0,0,65,19,1,0,0,0,5,23,31,43,52,59];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class FormularioParser extends antlr4.Parser {

    static grammarFileName = "Formulario.g4";
    static literalNames = [ null, "'formulario'", "'texto'", "'numero'", 
                            "'booleano'", "'verdadero'", "'falso'", "':'", 
                            "'}'", "'{'", "';'", "'='", "'\"'" ];
    static symbolicNames = [ null, "FORMULARIO", "TEXTO", "NUMERO", "BOOLEANO", 
                             "VERDADERO", "FALSO", "DOSPUNTOS", "LLAVEDER", 
                             "LLAVEIZQ", "PUNTOYCOMA", "IGUAL", "COMILLAS", 
                             "ID", "DIGITO", "CARACTER", "WS" ];
    static ruleNames = [ "prog", "formulario", "id", "campo", "tipo", "valor", 
                         "booleano", "cadena", "caracter", "numero" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = FormularioParser.ruleNames;
        this.literalNames = FormularioParser.literalNames;
        this.symbolicNames = FormularioParser.symbolicNames;
    }



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, FormularioParser.RULE_prog);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 21; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 20;
	            this.formulario();
	            this.state = 23; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	formulario() {
	    let localctx = new FormularioContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, FormularioParser.RULE_formulario);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25;
	        this.match(FormularioParser.FORMULARIO);
	        this.state = 26;
	        this.id();
	        this.state = 27;
	        this.match(FormularioParser.LLAVEIZQ);
	        this.state = 31;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===13) {
	            this.state = 28;
	            this.campo();
	            this.state = 33;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 34;
	        this.match(FormularioParser.LLAVEDER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	id() {
	    let localctx = new IdContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, FormularioParser.RULE_id);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 36;
	        this.match(FormularioParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	campo() {
	    let localctx = new CampoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, FormularioParser.RULE_campo);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 38;
	        this.id();
	        this.state = 39;
	        this.match(FormularioParser.DOSPUNTOS);
	        this.state = 40;
	        this.tipo();
	        this.state = 43;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===11) {
	            this.state = 41;
	            this.match(FormularioParser.IGUAL);
	            this.state = 42;
	            this.valor();
	        }

	        this.state = 45;
	        this.match(FormularioParser.PUNTOYCOMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	tipo() {
	    let localctx = new TipoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, FormularioParser.RULE_tipo);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 28) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valor() {
	    let localctx = new ValorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, FormularioParser.RULE_valor);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 52;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 10:
	        case 15:
	            this.state = 49;
	            this.cadena();
	            break;
	        case 14:
	            this.state = 50;
	            this.numero();
	            break;
	        case 5:
	        case 6:
	            this.state = 51;
	            this.booleano();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	booleano() {
	    let localctx = new BooleanoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, FormularioParser.RULE_booleano);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        _la = this._input.LA(1);
	        if(!(_la===5 || _la===6)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cadena() {
	    let localctx = new CadenaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, FormularioParser.RULE_cadena);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===15) {
	            this.state = 56;
	            this.caracter();
	            this.state = 61;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	caracter() {
	    let localctx = new CaracterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, FormularioParser.RULE_caracter);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 62;
	        this.match(FormularioParser.CARACTER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	numero() {
	    let localctx = new NumeroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, FormularioParser.RULE_numero);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 64;
	        this.match(FormularioParser.DIGITO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

FormularioParser.EOF = antlr4.Token.EOF;
FormularioParser.FORMULARIO = 1;
FormularioParser.TEXTO = 2;
FormularioParser.NUMERO = 3;
FormularioParser.BOOLEANO = 4;
FormularioParser.VERDADERO = 5;
FormularioParser.FALSO = 6;
FormularioParser.DOSPUNTOS = 7;
FormularioParser.LLAVEDER = 8;
FormularioParser.LLAVEIZQ = 9;
FormularioParser.PUNTOYCOMA = 10;
FormularioParser.IGUAL = 11;
FormularioParser.COMILLAS = 12;
FormularioParser.ID = 13;
FormularioParser.DIGITO = 14;
FormularioParser.CARACTER = 15;
FormularioParser.WS = 16;

FormularioParser.RULE_prog = 0;
FormularioParser.RULE_formulario = 1;
FormularioParser.RULE_id = 2;
FormularioParser.RULE_campo = 3;
FormularioParser.RULE_tipo = 4;
FormularioParser.RULE_valor = 5;
FormularioParser.RULE_booleano = 6;
FormularioParser.RULE_cadena = 7;
FormularioParser.RULE_caracter = 8;
FormularioParser.RULE_numero = 9;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FormularioParser.RULE_prog;
    }

	formulario = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FormularioContext);
	    } else {
	        return this.getTypedRuleContext(FormularioContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof FormularioListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FormularioListener ) {
	        listener.exitProg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FormularioVisitor ) {
	        return visitor.visitProg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FormularioContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FormularioParser.RULE_formulario;
    }

	FORMULARIO() {
	    return this.getToken(FormularioParser.FORMULARIO, 0);
	};

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	LLAVEIZQ() {
	    return this.getToken(FormularioParser.LLAVEIZQ, 0);
	};

	LLAVEDER() {
	    return this.getToken(FormularioParser.LLAVEDER, 0);
	};

	campo = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CampoContext);
	    } else {
	        return this.getTypedRuleContext(CampoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof FormularioListener ) {
	        listener.enterFormulario(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FormularioListener ) {
	        listener.exitFormulario(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FormularioVisitor ) {
	        return visitor.visitFormulario(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IdContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FormularioParser.RULE_id;
    }

	ID() {
	    return this.getToken(FormularioParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FormularioListener ) {
	        listener.enterId(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FormularioListener ) {
	        listener.exitId(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FormularioVisitor ) {
	        return visitor.visitId(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CampoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FormularioParser.RULE_campo;
    }

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	DOSPUNTOS() {
	    return this.getToken(FormularioParser.DOSPUNTOS, 0);
	};

	tipo() {
	    return this.getTypedRuleContext(TipoContext,0);
	};

	PUNTOYCOMA() {
	    return this.getToken(FormularioParser.PUNTOYCOMA, 0);
	};

	IGUAL() {
	    return this.getToken(FormularioParser.IGUAL, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FormularioListener ) {
	        listener.enterCampo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FormularioListener ) {
	        listener.exitCampo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FormularioVisitor ) {
	        return visitor.visitCampo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TipoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FormularioParser.RULE_tipo;
    }

	TEXTO() {
	    return this.getToken(FormularioParser.TEXTO, 0);
	};

	NUMERO() {
	    return this.getToken(FormularioParser.NUMERO, 0);
	};

	BOOLEANO() {
	    return this.getToken(FormularioParser.BOOLEANO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FormularioListener ) {
	        listener.enterTipo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FormularioListener ) {
	        listener.exitTipo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FormularioVisitor ) {
	        return visitor.visitTipo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FormularioParser.RULE_valor;
    }

	cadena() {
	    return this.getTypedRuleContext(CadenaContext,0);
	};

	numero() {
	    return this.getTypedRuleContext(NumeroContext,0);
	};

	booleano() {
	    return this.getTypedRuleContext(BooleanoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FormularioListener ) {
	        listener.enterValor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FormularioListener ) {
	        listener.exitValor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FormularioVisitor ) {
	        return visitor.visitValor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BooleanoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FormularioParser.RULE_booleano;
    }

	VERDADERO() {
	    return this.getToken(FormularioParser.VERDADERO, 0);
	};

	FALSO() {
	    return this.getToken(FormularioParser.FALSO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FormularioListener ) {
	        listener.enterBooleano(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FormularioListener ) {
	        listener.exitBooleano(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FormularioVisitor ) {
	        return visitor.visitBooleano(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CadenaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FormularioParser.RULE_cadena;
    }

	caracter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CaracterContext);
	    } else {
	        return this.getTypedRuleContext(CaracterContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof FormularioListener ) {
	        listener.enterCadena(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FormularioListener ) {
	        listener.exitCadena(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FormularioVisitor ) {
	        return visitor.visitCadena(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CaracterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FormularioParser.RULE_caracter;
    }

	CARACTER() {
	    return this.getToken(FormularioParser.CARACTER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FormularioListener ) {
	        listener.enterCaracter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FormularioListener ) {
	        listener.exitCaracter(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FormularioVisitor ) {
	        return visitor.visitCaracter(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumeroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FormularioParser.RULE_numero;
    }

	DIGITO() {
	    return this.getToken(FormularioParser.DIGITO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FormularioListener ) {
	        listener.enterNumero(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FormularioListener ) {
	        listener.exitNumero(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FormularioVisitor ) {
	        return visitor.visitNumero(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




FormularioParser.ProgContext = ProgContext; 
FormularioParser.FormularioContext = FormularioContext; 
FormularioParser.IdContext = IdContext; 
FormularioParser.CampoContext = CampoContext; 
FormularioParser.TipoContext = TipoContext; 
FormularioParser.ValorContext = ValorContext; 
FormularioParser.BooleanoContext = BooleanoContext; 
FormularioParser.CadenaContext = CadenaContext; 
FormularioParser.CaracterContext = CaracterContext; 
FormularioParser.NumeroContext = NumeroContext; 
