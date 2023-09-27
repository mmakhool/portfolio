const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

const router = require('./routes/ltk/loanRoutes'); // Imports the specified loan route

const loans = [
  {
    loanId: 1,
    borrowers: [
        { pairId: 1, name: 'John Doe' },
        { pairId: 2, name: 'Jane Smith' },
    ]
  },
  {
    loanId: 2,
    borrowers: [
        { pairId: 1, name: 'Mick Mack' },
        { pairId: 2, name: 'Mary Sena' }
    ]
  }, 
];

app.use('/loans', router);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

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
router.post('/', (sreq, re) => {
    const newLoan = req.body;
    loans.push(newLoan);
    res.status(201).json(newLoan);
});

/* PATCH method that updates borrower information based on loanId and pairId */
router.patch('/:loanId/borrowers/:pairId', (req, res) => {
    const loanId = parseInt(req.params.loanId);
    const pairId = parseInt(req.params.pairId);
    const updatedBorrowerInfo = req.body;

    const loan = loans.find((loan) => loan.loanId === loanId);

    if (loan) {
        const borrower = loan.borrowers.find((b) => b.pairId === pairId);
        if (borrower) {
            Object.assign(borrower, updatedBorrowerInfo);
            res.json(borrower);
        } else {    
            res.status(404).json({ message: 'Borrower not found' });
        }
    } else {
        res.status(404).json({ message: 'Loan not found' });
    }    
});

/* DELETE method that deletes a borrower based on loanId and pairId */
router.delete('/:loanId/borrowers/:pairId', (req, re) => {
    const loanId = parseInt(req.params.loanId);
    const pairId = parseInt(req.params.pairId);

    const loan = loans.find((loan) => loan.loanId === loanId);

    if (loan) {
        const initialBorrowersCount = loan.borrowers.length;
        loan.borrowers = loan.borrowers.filter((b) => b.pairId !== pairId);
        
        if (loan.borrowers.length === initialBorrowersCount) { 
            res.status(404).json({ message: 'Borrower not found' });
        } else {
            res.sendStatus(204);
        }
    } else {
        res.status(404).json({ message: 'Loan not found' });
    }    
});

/* DELETE method that deletes a loan object based on loanId */
router.delete('/:loanId', (req, re) => {
    const loanId = parseInt(req.params.loanId);
    const initialLoansCount = loans.length;
    loans = loans.filter((loan) => loan.loanId !== loanId);

    if (loans.length === initialLoansCount) {
        res.status(404).json({ message: 'Loan not found' });
    } else {
        res.sendStatus(204);
    }
});
