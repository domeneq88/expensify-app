import React from 'react'
import { connect } from 'react-redux'
import numeral from 'numeral'

const ExpensesSummary = ({ expenseCount, expensedTotal}) => {
    const expenseWord = expenseCount === 1 ? 'expnse' : 'expenses'
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00')
    return (
        <div>
            <h1>Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}</h1>
        </div>
    )
}