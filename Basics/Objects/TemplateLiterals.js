// Regular String:
const message = "This is my\n first message";
// Regular strings use single ('') or double ("") quotes.
// Special characters like newline (\n) require escape sequences.

// Concatenated String:
const concantenatedMessage = "This is my\n" + "\'first\' message";
// Concatenation uses the + operator.
// Additional escape characters may be needed for special characters.

// Template Literal:
const templateLiteral = `This is my 
'first' message`;
// Template literals are enclosed in backticks (``).
// They allow for multi-line strings without escape sequences.

// Template Literal with Variables and Expressions:
const personName = "tim";
const letter = 
`Hi ${personName} I like ${2 + 3},

Hows it going?

- Me`;

// Template literals can contain variables (${variable}) and expressions (${expression}).
// Variables and expressions are evaluated and replaced with their values when the template literal is evaluated.

// Summary:
// Template literals offer a more concise syntax for multi-line strings.
// They support variable interpolation and expression evaluation directly within the string.
// Template literals are preferred for complex string manipulation and formatting tasks.
