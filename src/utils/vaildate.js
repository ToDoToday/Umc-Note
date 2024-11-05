const emailPattern = /^[A-Za-z0-9._-]+@[A-Za-z0-9-]+\.[A-Za-z0-9-]+$/; 

function validateUser(values) { 
    const errors = {
        email: '',
        password: '',
    };

    if (!values.email) {
        errors.email = '이메일을 반드시 입력해주세요.';
    } else if (!emailPattern.test(values.email)) { 
        errors.email = '올바른 이메일 형식이 아닙니다. 다시 확인해주세요!';
    }

    if (!values.password) {
        errors.password = '비밀번호도 쫌.';
    } else if (values.password.length < 8) {
        errors.password = '비밀번호는 8자 이상이어야 합니다.';
    } else if (values.password.length > 16) {
        errors.password = '비밀번호는 16자 이하여야 합니다.';
    }

    return errors;
}

function validateLogin(values) {
    return validateUser(values); 
}

function validateSignup(values) {
    const errors = validateUser(values); // 이메일과 비밀번호 검증
    
    // 추가적인 검증 로직 (비밀번호 확인)
    if (!values.PasswordCheck) {
        errors.PasswordCheck = '비밀번호 검증 또한 필수 입력 요소입니다.';
    } else if (values.password !== values.PasswordCheck) {
        errors.PasswordCheck = '비밀번호가 일치하지 않습니다!';
    }

    return errors;
}

export { validateLogin, validateSignup };
