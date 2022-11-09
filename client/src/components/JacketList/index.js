import React, { useEffect } from 'react';
import JacketItem from '../JacketItem';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_JACKET} from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_JACKET} from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
// import spinner from '../../assets/spinner.gif';

function JacketList() {
  const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_ALL_JACKET);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_JACKET,
        jacket: data.jacket,
      });
      data.jacket.forEach((jacket) => {
        idbPromise('jacket', 'put', jacket);
      });
    } else if (!loading) {
      idbPromise('jacket', 'get').then((jacket) => {
        dispatch({
          type: UPDATE_JACKET,
          jacket: jacket,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterJacket() {
    if (!currentCategory) {
      return state.jacket;
    }

    return state.jacket.filter(
      (jacket) => jacket.category._id === currentCategory
    );
  }

  return (
    <div className="my-2">
      {state.jacket.length ? (
        <div className="flex-row">
          {filterJacket().map((jacket) => (
            <JacketItem
              key={jacket._id}
              _id={jacket._id}
              image={jacket.image}
              name={jacket.name}
              price={jacket.price}
              quantity={jacket.quantity}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any jackets yet!</h3>
      )}
      {/* {loading ? <img src={spinner} alt="loading" /> : null} */}
    </div>
  );
}

export default JacketList;
