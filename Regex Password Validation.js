const validate = password => /^(?=[a-zA-Z0-9]{6,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password);
