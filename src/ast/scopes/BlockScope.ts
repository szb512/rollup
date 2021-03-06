import { AstContext } from '../../Module';
import Identifier from '../nodes/Identifier';
import { ExpressionEntity } from '../nodes/shared/Expression';
import { UNKNOWN_EXPRESSION } from '../values';
import LocalVariable from '../variables/LocalVariable';
import ChildScope from './ChildScope';

export default class BlockScope extends ChildScope {
	addDeclaration(
		identifier: Identifier,
		context: AstContext,
		init: ExpressionEntity | null = null,
		isHoisted: boolean = false
	) {
		if (isHoisted) {
			return this.parent.addDeclaration(
				identifier,
				context,
				UNKNOWN_EXPRESSION,
				true
			) as LocalVariable;
		} else {
			return super.addDeclaration(identifier, context, init, false) as LocalVariable;
		}
	}
}
