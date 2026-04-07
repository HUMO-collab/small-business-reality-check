# OPERATION GUIDE
## How We Work — Claude Code + Claude.ai (Antigravity)

> This guide defines the operating model for this project and all future projects.
> It covers roles, session structure, token discipline, and the handoff protocol between tools.
> Both Claude Code and Claude.ai should read this before engaging on any task.

---

## The Two-Tool Model

We use two AI tools with distinct, non-overlapping roles. Using the wrong tool for a task wastes tokens, produces worse results, and creates confusion.

| Tool | Role | When to Use |
|---|---|---|
| **Claude Code** | Execution | Writing code, editing files, running the app, debugging syntax, wiring state, implementing specs |
| **Claude.ai (Antigravity)** | Strategy | Architecture decisions, copy review, spec creation, logic design, code review, debugging strategy |

**The rule:** If you are producing output that belongs in a file, that's Claude Code. If you are thinking through a problem before touching a file, that's Claude.ai.

---

## Part 1 — Claude Code Operating Rules

### 1.1 Session Start Protocol

Every Claude Code session begins with these three steps — no exceptions:

1. Read `CLAUDE.md` fully
2. Read `PROGRESS.md` — find the first unchecked task in the Build Sequence
3. Run `npm run dev` — verify the current state of the app before writing anything

Only then begin the task.

### 1.2 One Task Per Session

Each session has exactly one task. The task is the first unchecked item in `PROGRESS.md`.

Do not start a second task in the same session even if the first completes quickly. Instead:
- Validate the completed task against `VALIDATION.md`
- Update `PROGRESS.md` and `CLAUDE.md` Progress Log
- End the session and run `/clear`

This discipline keeps context windows small and output quality high.

### 1.3 Prompt Format (How to Instruct Claude Code)

Good prompts are short and file-referenced:

```
GOOD:
"Build RewardGate.jsx — see BRIEF.md lines 120–180 for copy and field spec"

BAD:
"Build the reward gate screen. It should have a headline that says you've reached
your first reward milestone and then there's a form with first name, email, business
name and an optional website field and a button that says reserve my reward..."
```

Always reference files. Never paste content from files into the prompt.

### 1.4 Token Conservation Rules

| Rule | Why |
|---|---|
| Run `/clear` after every task | Resets context to CLAUDE.md only — massive token saving |
| Write to files, not chat | File reads are cheap. Chat context is expensive |
| No explanations unless asked | Code output only. Cut preamble and summaries |
| Reference files by path | Never paste file contents into the prompt window |
| CLAUDE.md is the memory | All project context lives there. Stop re-explaining in prompts |
| Short task prompts | Task name + file reference. Nothing more |

### 1.5 Session End Protocol

Every Claude Code session ends with these steps:

1. Run the app — check all screens touched in this session
2. Open browser console — resolve all errors
3. Run the relevant section of `VALIDATION.md`
4. Update `PROGRESS.md` — check the task off, log what was done, set what is next
5. Update the Progress Log in `CLAUDE.md`
6. `git commit -m "feat: [task name]"`
7. Run `/clear`

### 1.6 What Claude Code Never Does

- Alter copy without checking `BRIEF.md` first
- Refactor files outside the current task scope
- Add features not specified in the current task
- Leave console errors unresolved
- Skip validation before ending the session
- Explain what it is about to do instead of doing it

---

## Part 2 — Claude.ai (Antigravity) Operating Rules

### 2.1 Role and Purpose

Claude.ai is the strategic layer. It operates before code is written and after code is reviewed. It does not write production code — it produces specs, decisions, and analysis that Claude Code then implements.

### 2.2 When to Use Claude.ai

| Situation | What to Bring | Expected Output |
|---|---|---|
| Starting a new feature | The relevant BRIEF.md section | Edge cases, implementation notes, decisions to make before coding |
| A bug you can't diagnose | The broken component + error message | Diagnosis + specific fix instructions |
| Reviewing completed code | The component file | Issues found, gaps vs spec, suggested improvements |
| Copy or UX questions | The spec section + the current implementation | Clear directive on which version to use and why |
| New project planning | The raw requirements | Structured build brief in the same format as BRIEF.md |
| Architectural decision | The question + current state | A clear recommendation with reasoning |

### 2.3 How to Prompt Claude.ai

Claude.ai works best with context-first, question-last prompts:

```
GOOD:
"Here is the gate component [paste code]. Here is the spec it should match
[paste BRIEF.md section]. What does it get wrong?"

GOOD:
"The state is not persisting after page refresh. Here is useSurveyState.js
[paste]. What is broken and what is the fix?"

BAD:
"Does my code look good?"
BAD:
"Can you check if everything is right?"
```

### 2.4 The Handoff Protocol

Claude.ai output should always be converted into one of these forms before going to Claude Code:

- A note added to `PROGRESS.md` under Decisions Made
- A spec update in `BRIEF.md`
- A task added to the Build Sequence in `PROGRESS.md`
- A bug logged in `CLAUDE.md` section 11

Claude Code does not read chat transcripts. It reads files. If the output of a Claude.ai session is not written to a file, it is lost.

### 2.5 What Claude.ai Never Does

- Write production-ready component code for direct copy-paste (it produces specs and logic, Claude Code produces the implementation)
- Make decisions about copy without checking `BRIEF.md`
- Suggest adding features not in the brief without flagging it explicitly as a scope change

---

## Part 3 — The Full Workflow

```
NEW FEATURE OR TASK
        │
        ▼
Claude.ai: Review spec section in BRIEF.md
           Identify edge cases and decisions
           Write notes to PROGRESS.md
        │
        ▼
Claude Code: Read CLAUDE.md + PROGRESS.md
             Implement the task (one task only)
             Validate against VALIDATION.md
             Update PROGRESS.md + git commit
             /clear
        │
        ▼
Claude.ai (optional): Review completed component
                      Log any issues to PROGRESS.md
        │
        ▼
Next task in PROGRESS.md build sequence
```

---

## Part 4 — File Roles (Quick Reference)

| File | Owner | Purpose |
|---|---|---|
| `CLAUDE.md` | Both | Project context, state shape, rules, progress log. Auto-loaded by Claude Code. |
| `.clinerules` | Claude Code | Behaviour rules enforced every session |
| `BRIEF.md` | Both | Source of truth for all copy, logic, and expected output |
| `VALIDATION.md` | Both | 81-point checklist. Used by Claude Code per session and at delivery |
| `PROGRESS.md` | Both | Session log, build sequence, known issues, decisions |
| `OPERATION_GUIDE.md` | Both | This file. The operating model for all sessions |

---

## Part 5 — Applying This System to Future Projects

This operating model is project-agnostic. To use it on a new project:

1. Create a new `CLAUDE.md` with the new project's context (tech stack, state shape, file structure, rules)
2. Copy `.clinerules` as-is — it needs no changes
3. Create a new `BRIEF.md` using the same structure as this project's brief (requirements, expected result, what not to do, validation checklist)
4. Create a new `PROGRESS.md` with the build sequence for the new project
5. Copy `VALIDATION.md` and rewrite the checklist sections for the new project's requirements
6. Copy `OPERATION_GUIDE.md` as-is — it applies unchanged

The only files that change per project: `CLAUDE.md`, `BRIEF.md`, `PROGRESS.md`, `VALIDATION.md`.
The files that never change: `.clinerules`, `OPERATION_GUIDE.md`.

---

## Part 6 — Common Mistakes to Avoid

| Mistake | Consequence | Fix |
|---|---|---|
| Not running `/clear` between tasks | Bloated context, degraded output, wasted tokens | Run `/clear` every time without exception |
| Pasting copy into prompts instead of referencing BRIEF.md | Wastes tokens, risks paraphrase errors | Always reference the file and line number |
| Skipping VALIDATION.md | Bugs ship, rework sessions needed | Validate every session before committing |
| Using Claude Code for architecture decisions | Poor decisions made at speed | Architecture always goes through Claude.ai first |
| Not writing Claude.ai outputs to files | Decisions lost between sessions | Every decision gets written to PROGRESS.md |
| Running multiple tasks in one session | Large context, harder to debug | One task, one commit, one `/clear` |
| Re-explaining context that is already in CLAUDE.md | Wastes tokens every session | Trust CLAUDE.md. Update it when context changes |

---

*This guide is the operating system for the project team — human, Claude Code, and Claude.ai.*
*It does not change during development. If it needs updating, that is a project-level decision.*
