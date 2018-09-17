import { takeLatest, put, call } from "redux-saga/effects";
import {
  GET_RANDOM_TEXT,
  GET_RANDOM_TEXT_LOADING,
  GET_RANDOM_TEXT_SUCCESS
} from "../../redux/actions/actionTypes";
import { getRandomTextApi } from "../../api/api";
import { xmlParser } from "../../common/helpers";

function* getRandomText() {
  try {
    yield put({ type: GET_RANDOM_TEXT_LOADING });
    // const response = yield call(getRandomTextApi);

    // const parsedResponse = xmlParser(`<div>${response.data.text_out}</div>`);
    const parsedResponse = xmlParser(`<div><p>Lorem ipsum molestie in luctus justo amet suscipit tortor, nec dictum sapien felis vitae fermentum duis imperdiet curabitur maecenas volutpat cras in litora quam aliquet eget vitae lobortis donec mauris.</p>
    <p>Arcu placerat justo morbi phasellus ipsum ullamcorper habitant luctus eleifend eu, quam cursus molestie litora primis ullamcorper lobortis quam ut hac purus tempor gravida imperdiet torquent, adipiscing hac quis venenatis morbi laoreet, egestas enim habitasse nulla.</p>
    <p>Sed porta interdum ipsum curae fusce sagittis per, amet placerat primis aenean sodales nunc felis luctus, pellentesque posuere habitasse nisl tristique elit.</p>
    </div>`);

    const pArray = Array.prototype.slice.call(
      parsedResponse.getElementsByTagName("p")
    );

    let parsedString = "";

    pArray.map(content => {
      parsedString += content.innerHTML + "\n";
      return null;
    });
    yield put({
      type: GET_RANDOM_TEXT_SUCCESS,
      payload: { text: parsedString }
    });
  } catch (e) {
    console.error(e);
  }
}

function* getRandomTextSaga() {
  yield takeLatest(GET_RANDOM_TEXT, getRandomText);
}
export default getRandomTextSaga;
