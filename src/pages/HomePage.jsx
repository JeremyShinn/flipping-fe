import { Link } from 'react-router-dom';
import ExerciseTable from '../components/ExerciseTable';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage({setExerciseToEdit}) {
    const [exercises, setExercises] = useState([]);
    const navigate = useNavigate();

    const loadExercises = async () => {
        const response = await fetch('/exercises');
        const data = await response.json();
        setExercises(data);
    }

    useEffect( () => {
        loadExercises();
    }, []);

    const onEdit = (exercise) => {
        setExerciseToEdit(exercise);
        navigate('/edit-exercise');
    }

    const onDelete = async (_id) => {
        const response = await fetch(
            `/exercises/${_id}`,
            {method: 'DELETE'}
        );

        if (response.status === 204) {
            setExercises(exercises.filter(exercise => exercise._id !== _id));
        }

        else {
            alert(`Failed to delete exercise with _id = ${_id} , status code = ${response.status}`);
        }
    }

    return (
        <>
            <h2>List of Workouts</h2>
            <p>
            <ExerciseTable exercises={exercises} onEdit={onEdit} onDelete={onDelete}></ExerciseTable>
            <Link to="/add-exercise">Add Workout</Link>
            </p>
        </>
            
    );
}

export default HomePage;