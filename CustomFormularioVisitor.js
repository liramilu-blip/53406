import FormularioVisitor from './generated/FormularioVisitor.js';

export default class CustomFormularioVisitor extends FormularioVisitor {
  visitProg(ctx) {
    return this.visit(ctx.declaraciones());
  }

  visitDeclaraciones(ctx) {
    return ctx.declaracion().map(dec => this.visit(dec)).join('\n');
  }

  visitDeclaracion(ctx) {
  const nombre = ctx.identificador().getText();

  // Obtener parámetros si existen
  const paramsCtx = ctx.parametros();
  let parametros = '';
  if (paramsCtx) {
    const paramList = paramsCtx.parametro().map(p => p.identificador().getText());
    parametros = paramList.join(', ');
  }

  const cuerpo = this.visit(ctx.cuerpo());
  return `function ${nombre}(${parametros}) {\n${cuerpo}\n}`;
}


  visitCuerpo(ctx) {
    return ctx.instruccion().map(instr => this.visit(instr)).join('\n');
  }

  visitInstruccion(ctx) {
    return this.visit(ctx.retorno());
  }

  visitRetorno(ctx) {
    return `return ${this.visit(ctx.expresion())};`;
  }

  visitExpresion(ctx) {
    if (ctx.children.length === 3)
      return `${this.visit(ctx.expresion(0))} ${ctx.getChild(1).getText()} ${this.visit(ctx.termino())}`;
    return this.visit(ctx.termino());
  }

  visitTermino(ctx) {
    if (ctx.children.length === 3)
      return `${this.visit(ctx.termino(0))} ${ctx.getChild(1).getText()} ${this.visit(ctx.factor())}`;
    return this.visit(ctx.factor());
  }

  visitFactor(ctx) {
    if (ctx.identificador()) return ctx.identificador().getText();
    if (ctx.DIGITO()) return ctx.DIGITO().getText();
    return `(${this.visit(ctx.expresion())})`;
  }
}
