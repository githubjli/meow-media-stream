# AGENTS.md

## React Rules
- All components must use default export
- Do not use named exports for components
- One component per file
- Hooks can use named export

## Debugging Rules
- Never refactor multiple files blindly
- Always isolate issue first
- Fix only the broken component

## Error Handling
If error:
"Element type is invalid"

Check:
- import/export mismatch
- undefined component

## Change Rules
- Minimal changes only
- Do not modify working code
- Do not redesign structure

## Git Rules
- Always commit after fix
- Small commits only

## Output Rules
Every response must include:
1. Root cause
2. Fix
3. Files changed
