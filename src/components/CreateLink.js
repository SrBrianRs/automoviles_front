import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';


const CREATE_LINK_MUTATION = gql`
  mutation PostMutation(
    $brand: String!
    $model: String!
    $color: String!
    $version: String!
    $year: Int!
    $engine: String!
    $consumption: Decimal!
    $price: Decimal!
    $airbags: Boolean!
    $absbreak: Boolean!
  ) {
    createCar( brand: $brand
        model: $model
        color: $color
        version: $version
        year: $year
        engine: $engine
        consumption: $consumption
        price: $price
        airbags: $airbags
        absbreak: $absbreak) {
            id
            brand
            model
            color
            version
            year
            engine
            consumption
            price
            airbags
            absbreak
    }
  }
`;








const CreateLink = () => {
    const navigate = useNavigate();
    const [formState, setFormState] = useState({
        brand: '',
        model: '',
        color: '',
        version: '',
        year: 0,
        engine: '',
        consumption: 0.0,
        price: 0.0,
        airbags: true,
        absbreak: true,
    });




    const [CreateLink] = useMutation(CREATE_LINK_MUTATION, {
        variables: {
            brand: formState.brand,
            model: formState.model,
            color: formState.color,
            version: formState.version,
            year: formState.year,
            engine: formState.engine,
            consumption: formState.consumption,
            price: formState.price,
            airbags: formState.airbags,
            absbreak: formState.absbreak
        },
        onCompleted: () => navigate('/')
    });



return (
    <div>
        <form
            onSubmit={(e) => {
                e.preventDefault();
                CreateLink();
            }}
        >
           
            <div className="flex flex-column mt3">
            Marca:
                <input
                    className="mb2"
                    value={formState.brand}
                    onChange={(e) =>
                        setFormState({
                            ...formState,
                            brand: e.target.value
                        })
                    }
                    type="text"
                    placeholder="Marca"
                />
                Modelo:
                <input
                    className="mb2"
                    value={formState.model}
                    onChange={(e) =>
                        setFormState({
                            ...formState,
                            model: e.target.value
                        })
                    }
                    type="text"
                    placeholder="Modelo"
                />
                Color:
                <input
                    className="mb2"
                    value={formState.color}
                    onChange={(e) =>
                        setFormState({
                            ...formState,
                            color: e.target.value
                        })
                    }
                    type="text"
                    placeholder="Color"
                />
                Version:
                <input
                    className="mb2"
                    value={formState.version}
                    onChange={(e) =>
                        setFormState({
                            ...formState,
                            version: e.target.value
                        })
                    }
                    type="text"
                    placeholder="Version"
                />
                Año:
                <input
                    className="mb2"
                    value={formState.year}
                    onChange={(e) =>
                        setFormState({
                            ...formState,
                            year: parseInt(e.target.value)
                        })
                    }
                    type="number"
                    placeholder="Año"
                />
                Motor:
                <input
                    className="mb2"
                    value={formState.engine}
                    onChange={(e) =>
                        setFormState({
                            ...formState,
                            engine: e.target.value
                        })
                    }
                    type="text"
                    placeholder="Motor"
                />
                Consumo:
                <input
                    className="mb2"
                    value={formState.consumption}
                    onChange={(e) =>
                        setFormState({
                            ...formState,
                            consumption: e.target.value
                        })
                    }
                    type="number"
                    placeholder="Consumo"
                />
                Precio:
                <input
                    className="mb2"
                    value={formState.price}
                    onChange={(e) =>
                        setFormState({
                            ...formState,
                            price: e.target.value
                        })
                    }
                    type="number"
                    placeholder="Precio"
                />
                <label>
                    <input
                        type="checkbox"
                        checked={formState.airbags}
                        onChange={(e) =>
                            setFormState({
                                ...formState,
                                airbags: e.target.checked
                            })
                        }
                    />
                    Bolsas de aire
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={formState.absbreak}
                        onChange={(e) =>
                            setFormState({
                                ...formState,
                                absbreak: e.target.checked
                            })
                        }
                    />
                    Frenos ABS
                </label>
            </div>
            <button type="submit">Agregar</button>
        </form>
    </div>
);
};

export default CreateLink;