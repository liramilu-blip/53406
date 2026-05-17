// Generated from d:/ParcialSSL/TareaAnalizador/Formulario.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class FormularioLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		FORMULARIO=1, TEXTO=2, NUMERO=3, BOOLEANO=4, VERDADERO=5, FALSO=6, DOSPUNTOS=7, 
		LLAVEDER=8, LLAVEIZQ=9, PUNTOYCOMA=10, IGUAL=11, COMILLAS=12, ID=13, DIGITO=14, 
		CARACTER=15, WS=16;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"FORMULARIO", "TEXTO", "NUMERO", "BOOLEANO", "VERDADERO", "FALSO", "DOSPUNTOS", 
			"LLAVEDER", "LLAVEIZQ", "PUNTOYCOMA", "IGUAL", "COMILLAS", "ID", "DIGITO", 
			"CARACTER", "WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'formulario'", "'texto'", "'numero'", "'booleano'", "'verdadero'", 
			"'falso'", "':'", "'}'", "'{'", "';'", "'='", "'\"'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "FORMULARIO", "TEXTO", "NUMERO", "BOOLEANO", "VERDADERO", "FALSO", 
			"DOSPUNTOS", "LLAVEDER", "LLAVEIZQ", "PUNTOYCOMA", "IGUAL", "COMILLAS", 
			"ID", "DIGITO", "CARACTER", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public FormularioLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "Formulario.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000\u0010u\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b"+
		"\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002"+
		"\u000f\u0007\u000f\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001"+
		"\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001"+
		"\u0000\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001"+
		"\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0001"+
		"\u0005\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0007\u0001"+
		"\u0007\u0001\b\u0001\b\u0001\t\u0001\t\u0001\n\u0001\n\u0001\u000b\u0001"+
		"\u000b\u0001\f\u0004\f`\b\f\u000b\f\f\fa\u0001\r\u0004\re\b\r\u000b\r"+
		"\f\rf\u0001\u000e\u0005\u000ej\b\u000e\n\u000e\f\u000em\t\u000e\u0001"+
		"\u000f\u0004\u000fp\b\u000f\u000b\u000f\f\u000fq\u0001\u000f\u0001\u000f"+
		"\u0000\u0000\u0010\u0001\u0001\u0003\u0002\u0005\u0003\u0007\u0004\t\u0005"+
		"\u000b\u0006\r\u0007\u000f\b\u0011\t\u0013\n\u0015\u000b\u0017\f\u0019"+
		"\r\u001b\u000e\u001d\u000f\u001f\u0010\u0001\u0000\u0004\u0002\u0000A"+
		"Zaz\u0001\u000009\u0002\u0000\n\n\r\r\u0003\u0000\t\n\r\r  x\u0000\u0001"+
		"\u0001\u0000\u0000\u0000\u0000\u0003\u0001\u0000\u0000\u0000\u0000\u0005"+
		"\u0001\u0000\u0000\u0000\u0000\u0007\u0001\u0000\u0000\u0000\u0000\t\u0001"+
		"\u0000\u0000\u0000\u0000\u000b\u0001\u0000\u0000\u0000\u0000\r\u0001\u0000"+
		"\u0000\u0000\u0000\u000f\u0001\u0000\u0000\u0000\u0000\u0011\u0001\u0000"+
		"\u0000\u0000\u0000\u0013\u0001\u0000\u0000\u0000\u0000\u0015\u0001\u0000"+
		"\u0000\u0000\u0000\u0017\u0001\u0000\u0000\u0000\u0000\u0019\u0001\u0000"+
		"\u0000\u0000\u0000\u001b\u0001\u0000\u0000\u0000\u0000\u001d\u0001\u0000"+
		"\u0000\u0000\u0000\u001f\u0001\u0000\u0000\u0000\u0001!\u0001\u0000\u0000"+
		"\u0000\u0003,\u0001\u0000\u0000\u0000\u00052\u0001\u0000\u0000\u0000\u0007"+
		"9\u0001\u0000\u0000\u0000\tB\u0001\u0000\u0000\u0000\u000bL\u0001\u0000"+
		"\u0000\u0000\rR\u0001\u0000\u0000\u0000\u000fT\u0001\u0000\u0000\u0000"+
		"\u0011V\u0001\u0000\u0000\u0000\u0013X\u0001\u0000\u0000\u0000\u0015Z"+
		"\u0001\u0000\u0000\u0000\u0017\\\u0001\u0000\u0000\u0000\u0019_\u0001"+
		"\u0000\u0000\u0000\u001bd\u0001\u0000\u0000\u0000\u001dk\u0001\u0000\u0000"+
		"\u0000\u001fo\u0001\u0000\u0000\u0000!\"\u0005f\u0000\u0000\"#\u0005o"+
		"\u0000\u0000#$\u0005r\u0000\u0000$%\u0005m\u0000\u0000%&\u0005u\u0000"+
		"\u0000&\'\u0005l\u0000\u0000\'(\u0005a\u0000\u0000()\u0005r\u0000\u0000"+
		")*\u0005i\u0000\u0000*+\u0005o\u0000\u0000+\u0002\u0001\u0000\u0000\u0000"+
		",-\u0005t\u0000\u0000-.\u0005e\u0000\u0000./\u0005x\u0000\u0000/0\u0005"+
		"t\u0000\u000001\u0005o\u0000\u00001\u0004\u0001\u0000\u0000\u000023\u0005"+
		"n\u0000\u000034\u0005u\u0000\u000045\u0005m\u0000\u000056\u0005e\u0000"+
		"\u000067\u0005r\u0000\u000078\u0005o\u0000\u00008\u0006\u0001\u0000\u0000"+
		"\u00009:\u0005b\u0000\u0000:;\u0005o\u0000\u0000;<\u0005o\u0000\u0000"+
		"<=\u0005l\u0000\u0000=>\u0005e\u0000\u0000>?\u0005a\u0000\u0000?@\u0005"+
		"n\u0000\u0000@A\u0005o\u0000\u0000A\b\u0001\u0000\u0000\u0000BC\u0005"+
		"v\u0000\u0000CD\u0005e\u0000\u0000DE\u0005r\u0000\u0000EF\u0005d\u0000"+
		"\u0000FG\u0005a\u0000\u0000GH\u0005d\u0000\u0000HI\u0005e\u0000\u0000"+
		"IJ\u0005r\u0000\u0000JK\u0005o\u0000\u0000K\n\u0001\u0000\u0000\u0000"+
		"LM\u0005f\u0000\u0000MN\u0005a\u0000\u0000NO\u0005l\u0000\u0000OP\u0005"+
		"s\u0000\u0000PQ\u0005o\u0000\u0000Q\f\u0001\u0000\u0000\u0000RS\u0005"+
		":\u0000\u0000S\u000e\u0001\u0000\u0000\u0000TU\u0005}\u0000\u0000U\u0010"+
		"\u0001\u0000\u0000\u0000VW\u0005{\u0000\u0000W\u0012\u0001\u0000\u0000"+
		"\u0000XY\u0005;\u0000\u0000Y\u0014\u0001\u0000\u0000\u0000Z[\u0005=\u0000"+
		"\u0000[\u0016\u0001\u0000\u0000\u0000\\]\u0005\"\u0000\u0000]\u0018\u0001"+
		"\u0000\u0000\u0000^`\u0007\u0000\u0000\u0000_^\u0001\u0000\u0000\u0000"+
		"`a\u0001\u0000\u0000\u0000a_\u0001\u0000\u0000\u0000ab\u0001\u0000\u0000"+
		"\u0000b\u001a\u0001\u0000\u0000\u0000ce\u0007\u0001\u0000\u0000dc\u0001"+
		"\u0000\u0000\u0000ef\u0001\u0000\u0000\u0000fd\u0001\u0000\u0000\u0000"+
		"fg\u0001\u0000\u0000\u0000g\u001c\u0001\u0000\u0000\u0000hj\u0007\u0002"+
		"\u0000\u0000ih\u0001\u0000\u0000\u0000jm\u0001\u0000\u0000\u0000ki\u0001"+
		"\u0000\u0000\u0000kl\u0001\u0000\u0000\u0000l\u001e\u0001\u0000\u0000"+
		"\u0000mk\u0001\u0000\u0000\u0000np\u0007\u0003\u0000\u0000on\u0001\u0000"+
		"\u0000\u0000pq\u0001\u0000\u0000\u0000qo\u0001\u0000\u0000\u0000qr\u0001"+
		"\u0000\u0000\u0000rs\u0001\u0000\u0000\u0000st\u0006\u000f\u0000\u0000"+
		"t \u0001\u0000\u0000\u0000\u0005\u0000afkq\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}