<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules
- The site is a single static page in `src/routes/index.tsx`, prerendered at build time (see `vite.config.ts`); no backend, because the build is hosted as plain files on external shared hosting.
- Styling is the client's original hand-written CSS in `src/styles.css`, loaded without Tailwind preflight, because the design relies on browser default styles; images live in `public/img` and are referenced with relative `img/...` paths.
