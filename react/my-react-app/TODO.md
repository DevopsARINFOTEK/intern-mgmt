# TODO - Internship Registration & Dashboard (React)

- [ ] Fix React entrypoint: update `src/main.jsx` to render React `<App />` using `react-dom/client`
- [ ] Create missing step components under `src/assets/components/`:
  - [ ] `InternRegister.jsx` (wrap/use existing registration UI, call `onComplete(data)`)
  - [ ] `InternAllocation.jsx`
  - [ ] `MentorAssignment.jsx`
  - [ ] `InternTracking.jsx`
  - [ ] `Dashboard.jsx`
- [ ] Ensure `src/app.jsx` can import and render the step components without missing-file errors
- [ ] Wire props correctly:
  - [ ] `registration` passed into Allocation step
  - [ ] `allocation` passed into Mentor step
  - [ ] `appData` used for Tracking + Dashboard
- [ ] Basic functionality: each step must have Next (calls onComplete) and Back (calls onBack)
- [ ] Run `npm run dev` and verify step navigation

