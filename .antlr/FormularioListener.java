// Generated from d:/ParcialSSL/TareaAnalizador/Formulario.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link FormularioParser}.
 */
public interface FormularioListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link FormularioParser#prog}.
	 * @param ctx the parse tree
	 */
	void enterProg(FormularioParser.ProgContext ctx);
	/**
	 * Exit a parse tree produced by {@link FormularioParser#prog}.
	 * @param ctx the parse tree
	 */
	void exitProg(FormularioParser.ProgContext ctx);
	/**
	 * Enter a parse tree produced by {@link FormularioParser#formulario}.
	 * @param ctx the parse tree
	 */
	void enterFormulario(FormularioParser.FormularioContext ctx);
	/**
	 * Exit a parse tree produced by {@link FormularioParser#formulario}.
	 * @param ctx the parse tree
	 */
	void exitFormulario(FormularioParser.FormularioContext ctx);
	/**
	 * Enter a parse tree produced by {@link FormularioParser#id}.
	 * @param ctx the parse tree
	 */
	void enterId(FormularioParser.IdContext ctx);
	/**
	 * Exit a parse tree produced by {@link FormularioParser#id}.
	 * @param ctx the parse tree
	 */
	void exitId(FormularioParser.IdContext ctx);
	/**
	 * Enter a parse tree produced by {@link FormularioParser#campo}.
	 * @param ctx the parse tree
	 */
	void enterCampo(FormularioParser.CampoContext ctx);
	/**
	 * Exit a parse tree produced by {@link FormularioParser#campo}.
	 * @param ctx the parse tree
	 */
	void exitCampo(FormularioParser.CampoContext ctx);
	/**
	 * Enter a parse tree produced by {@link FormularioParser#tipo}.
	 * @param ctx the parse tree
	 */
	void enterTipo(FormularioParser.TipoContext ctx);
	/**
	 * Exit a parse tree produced by {@link FormularioParser#tipo}.
	 * @param ctx the parse tree
	 */
	void exitTipo(FormularioParser.TipoContext ctx);
	/**
	 * Enter a parse tree produced by {@link FormularioParser#valor}.
	 * @param ctx the parse tree
	 */
	void enterValor(FormularioParser.ValorContext ctx);
	/**
	 * Exit a parse tree produced by {@link FormularioParser#valor}.
	 * @param ctx the parse tree
	 */
	void exitValor(FormularioParser.ValorContext ctx);
	/**
	 * Enter a parse tree produced by {@link FormularioParser#booleano}.
	 * @param ctx the parse tree
	 */
	void enterBooleano(FormularioParser.BooleanoContext ctx);
	/**
	 * Exit a parse tree produced by {@link FormularioParser#booleano}.
	 * @param ctx the parse tree
	 */
	void exitBooleano(FormularioParser.BooleanoContext ctx);
	/**
	 * Enter a parse tree produced by {@link FormularioParser#cadena}.
	 * @param ctx the parse tree
	 */
	void enterCadena(FormularioParser.CadenaContext ctx);
	/**
	 * Exit a parse tree produced by {@link FormularioParser#cadena}.
	 * @param ctx the parse tree
	 */
	void exitCadena(FormularioParser.CadenaContext ctx);
	/**
	 * Enter a parse tree produced by {@link FormularioParser#caracter}.
	 * @param ctx the parse tree
	 */
	void enterCaracter(FormularioParser.CaracterContext ctx);
	/**
	 * Exit a parse tree produced by {@link FormularioParser#caracter}.
	 * @param ctx the parse tree
	 */
	void exitCaracter(FormularioParser.CaracterContext ctx);
	/**
	 * Enter a parse tree produced by {@link FormularioParser#numero}.
	 * @param ctx the parse tree
	 */
	void enterNumero(FormularioParser.NumeroContext ctx);
	/**
	 * Exit a parse tree produced by {@link FormularioParser#numero}.
	 * @param ctx the parse tree
	 */
	void exitNumero(FormularioParser.NumeroContext ctx);
}