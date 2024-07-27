import { defineStore } from 'pinia';
import type { ValidationError } from 'v8n';

export const validationStore = defineStore('validationStore', () => {
	const makeCheckRulesAll = (formField: string, rulesData: VALIDATION.ValidationRule): VALIDATION.ValidationRuleError[] => {
		const { validation, errors } = rulesData;
		return validation.map((val: ValidationError) => ({
			isValid: !!validation.length,
			error: { [formField]: { message: errors[val.rule.name] } },
		}));
	};

	const makeCheckRules = (formField: string, rulesData: VALIDATION.ValidationRule): VALIDATION.ValidationRuleError => {
		const { validation, errors } = rulesData;
		if (!validation.length) return {
			isValid: true,
			error: { [formField]: { message: '' } },
		};
		return {
			isValid: !!validation.length,
			error: { [formField]: { message: errors[validation[0].rule.name] } },
		};
	};

	return {
		makeCheckRulesAll,
		makeCheckRules,
	};
});
