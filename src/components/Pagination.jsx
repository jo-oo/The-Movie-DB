import Button from 'react-bootstrap/Button'

const Pagination = ({ page, numPages, hasPreviousPage, onPreviousPage, hasNextPage, onNextPage }) => {
	return (
		<div className="pagination d-flex justify-content-between align-items-center mt-3">
			<div className="previous-page">
				<Button
					disabled={!hasPreviousPage} //har vi ej en previous page så är knappen disabled. vi tar emot den via props
					onClick={onPreviousPage}//när man klickar på knappen kör den onPreviousPage o den får den som en prop, på rad 3.
					variant="primary"
				>Previous Page</Button>
			</div>

			<div className="current-page">Page {page}/{numPages}</div>

			<div className="next-page">
				<Button
					disabled={!hasNextPage} 
					onClick={onNextPage} 
					variant="primary"
				>Next Page</Button>
			</div>
		</div>
	)
}

export default Pagination
