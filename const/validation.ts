import v8n from 'v8n';

export const ruleLoginForm = (val: string) => ({
	validation: v8n().not.empty().testAll(val),
	errors: {
		empty: 'fieldIsEmpty',
	},
});

export const rulePasswordForm = (val: string): VALIDATION.ValidationRule => ({
	validation: v8n().not.empty().testAll(val),
	errors: {
		empty: 'fieldIsEmpty',
	},
});
