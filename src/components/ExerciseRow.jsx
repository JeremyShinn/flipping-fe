import '../App.css';

import { MdEdit, MdDelete } from "react-icons/md";

function ExerciseRow({ exercise, onEdit, onDelete }) {
    return (
        <tr>
            <td> {exercise.name} </td>
            <td> {exercise.reps} </td>
            <td> {exercise.weight} </td>
            <td> {exercise.unit} </td>
            <td> {exercise.date} </td>
            <td> <MdEdit onClick={e => {e.preventDefault(); onEdit(exercise)}}/> </td>
            <td> <MdDelete onClick={e => {e.preventDefault(); onDelete(exercise._id)}}/> </td>
        </tr>
        /* </tr>
            <h3>{movie.title}</h3>
            <p>{movie.year}, {movie.language}</p>
            <p>
                <a href="/" onClick={e => {e.preventDefault(); onEdit(movie)}}>Edit</a>&nbsp;
                <a href="/" onClick={e => {e.preventDefault(); onDelete(movie._id)}}>Delete </a>
            </p>
        </div> */
    );
}

export default ExerciseRow;