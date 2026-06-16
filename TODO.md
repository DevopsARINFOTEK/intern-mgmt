# TODO

## Goal
Fix localhost/API wiring so the frontend correctly talks to the backend running on port **5001**, and make intern registration submit data.

## Steps
1. Confirm current mismatch: frontend calls `localhost:5000` for intern list while backend endpoints are on `5001`.
2. ✅ Update `frontend/src/components/internList.jsx` to call `http://localhost:5001/api/internships/all`.
3. ✅ Update `frontend/src/components/internRegistration.jsx` to POST form data to `http://localhost:5001/api/internships/register`.
4. (Optional) Improve payload mapping (some inputs like gender/date/address aren’t sent yet) and add better validation.
5. Run backend + frontend and verify: list loads and registration inserts rows.


