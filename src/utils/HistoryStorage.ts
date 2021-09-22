import AsyncStorage from '@react-native-async-storage/async-storage';
import { RouteParams } from '../screens/BookDetails/BookDetails';

const STORAGE_KEY = '@History';

/**
 * Items to keep in history.
 */
const HISTORY_LIMIT = 50;

export interface HistoryEntry {
  timestamp: Date;
  params: RouteParams;
}

/**
 * Get current history.
 *
 * @param invertSort Invert sorting? (newest first).
 *
 * Default: `true`.
 * @returns Current state.
 */
const get = async (invertSort = true): Promise<HistoryEntry[]> => {
  try {
    const value = await AsyncStorage.getItem(STORAGE_KEY);

    if (value !== null) {
      const state = JSON.parse(value) as HistoryEntry[];

      return invertSort ? state.reverse() : state;
    }
  } catch (err) {
    console.error('Error getting HistoryStorage', err);
  }

  return [];
};

/**
 * Put new state.
 *
 * @param params New entry.
 * @param url Picture URL form `book.book_covers[0].URL`.
 */
const put = async (params: RouteParams) => {
  const state = await get(false);
  console.debug('Add new History', params);

  if (state.length >= HISTORY_LIMIT) {
    state.shift();
  }

  state.push({
    timestamp: new Date(),
    params,
  });

  const value = JSON.stringify(state);
  await AsyncStorage.setItem(STORAGE_KEY, value);
};

/**
 * Search in current history.
 *
 * @param text Text to search in 'title' or exact 'id'.
 * @returns Results.
 */
const search = async (text: string): Promise<HistoryEntry[]> => {
  try {
    const state = await get();

    text = text.trim().toLowerCase();

    if (text) {
      return state.filter(
        (s) => s.params.id.toString() === text || s.params.title.toLowerCase().includes(text),
      );
    }

    return state;
  } catch (err) {
    console.error('Error searching in HistoryStorage', err);
  }

  return [];
};

export default {
  put,
  get,
  search,
};
