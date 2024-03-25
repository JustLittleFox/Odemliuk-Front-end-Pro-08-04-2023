import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';

function MyForm() {
    const [formData, setFormData] = useState(null);
    const [formValues, setFormValues] = useState({
        email: '',
        password: '',
        address: '',
        city: '',
        country: '',
        acceptRules: false
    });

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData(formValues);
    };

    const handleBack = () => {
        setFormData(null);
    };

    return formData ? (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>Country</th>
                        <th>Accepted Rules</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{formData.email}</td>
                        <td>{formData.password}</td>
                        <td>{formData.address}</td>
                        <td>{formData.city}</td>
                        <td>{formData.country}</td>
                        <td>{formData.acceptRules ? 'Yes' : 'No'}</td>
                    </tr>
                </tbody>
            </Table>
            <Button variant="primary" onClick={handleBack}>
                Back
            </Button>
        </>
    ) : (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" name="email" value={formValues.email} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" name="password" value={formValues.password} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicTextarea">
                <Form.Control type="textarea" placeholder="Address" name="address" value={formValues.address} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicTextarea">
                <Form.Control type="textarea" placeholder="City" name="city" value={formValues.city} onChange={handleChange} />
            </Form.Group>
            <Form.Select aria-label="country" name="country" value={formValues.country} onChange={handleChange}>
                <option>Country</option>
                <option value="Argentina">Argentina</option>
                <option value="Russia">Russia</option>
                <option value="China">China</option>
            </Form.Select>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Accept rules" name="acceptRules" checked={formValues.acceptRules} onChange={e => setFormValues({ ...formValues, acceptRules: e.target.checked })} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default MyForm;
