import type { ValidationError } from 'v8n';

export interface ValidationRule {
	validation: ValidationError[];
	errors: { [key: string]: string };
}

export interface ValidationRuleError {
	isValid: boolean;
	error: { [p: string]: { message: string } };
}

export interface Validation {
	validation: ValidationError[];
	errors: { [key: string]: string };
}

export as namespace VALIDATION;
