import * as Yup from 'yup';

export default Yup.object({
    email: Yup.string().required('Required'),
    name: Yup.string().required('Required'),
    phone: Yup.string().required('Required'),
});