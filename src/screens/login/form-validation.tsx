import * as Yup from 'yup';

export default Yup.object({
    user: Yup.string().required('Required'),
    password: Yup.string()
        .required('Required')
        .min(6, 'Min length 6 characters'),
});