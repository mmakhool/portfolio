const express = require('express');
const bodyParser = require('body-parser');
const chai = require('chai');
const supertest = require('supertest');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

const router = express.Router();

let loans = [];

/* Routes */

/* GET method that gets all loan objects */
router.get('/', (req, res) => {
    res.json(loans);
});

/* GET method that gets one loan object based on loanId */
router.get('/:loanId', (req, res) => {
        const loanId = parseInt(req.params.loanId);
        const loan = loans.find((loan) => loan.loanId === loanId);
    
        if (loan) {
            res.json(loan);
        } else {
            res.status(404).json({ message: 'Loan not found' });
        }
    });

/* POST method that adds new loan object with an array of borrowers */
router.post('/', (req, res) => {
    const newLoan = req.body;
    loans.push(newLoan);
    res.status(201).json(newLoan);  
});

/* PATCH method that updates borrower information based on loanId and pairId */
router.patch('/:loanId/borrowers/:pairId', (req, res) => { 
});

/* DELETE method that deletes a borrower based on loanId and pairId */
router.delete('/:loanId/borrowers/:pairId', (req, res) => {  
});

/* DELETE method that deletes a loan object based on loanId */
router.delete('/:loanId', (req, res) => {
});

app.use('/loans', router);

const request = supertest(app);
const expect = chai.expect;

/* Initialize fresh test */
describe('Loan Routes', () => {
    beforeEach(() => {
        loans = [];
});

    it('should retrieve all loans', async () => {
        const response = await request.get('/loans');
        expect(response.status).to.equal(200);
        expect(response.body).to.be.an('array');
    });

    it('should retrieve a specific loan by loanId', async () => {
        const loan = { loanId: 1, borrowers: [] };
        loans.push(loan);

        const response = await request.get('/loans/1');
        expect(response.status).to.equal(200);
        expect(response.body.loanId).to.equal(loan.loanId);
    });

    it('should add a new loan object', async () => {
        const newLoan = { loanId: 2, borrowers: [] };
        
        const response = await request.post('/loans').send(newLoan);
        expect(response.status).to.equal(201);
        expect(response.body.loanId).to.equal(newLoan.loanId);
    });
});

app.listen(PORT, () => {
    console.log(`Test app listening on port ${PORT}`);
});

module.exports = app; //Exports app for testing
