import ExerciseRow from './ExerciseRow';

function ExerciseTable({ exercises, onEdit, onDelete }) {
    return (
        <table>
            <thead>
                <tr>
                    <td> Name </td>
                    <td> Reps </td>
                    <td> Weight </td>
                    <td> Units </td>
                    <td> Date </td>
                    <td> Edit </td>
                    <td> Delete </td>
                </tr> 
            </thead>
            <tbody>
                {exercises.map((exercise, i) => <ExerciseRow exercise={exercise}
                    onEdit={onEdit} onDelete={onDelete} key={i} />)}         
            </tbody>
        </table>
        // <div className="collection-container">
        //     {exercises.map((exercise, i) => <ExerciseRow exercise={exercise} 
        //             onEdit={onEdit} onDelete={onDelete} key={i} />)}
        // </div>

    );
}

export default ExerciseTable;