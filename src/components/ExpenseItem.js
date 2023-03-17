import './ExpenseItem.css';

function ExpenseItem() {
    const expenseDate = new Date(2023,2,28);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 294.67;

    return (
        <div className='expense-item'>
            <div>March 13th 2023</div>
            <div className='expense-item__description'>
                <h2>{expenseTitle}</h2>
                <div className='expense-item__price'>$294.67</div>
            </div>
        </div>
    );
}

export default ExpenseItem;