import { PropType } from 'vue';
import type {
  SortType, Item, ServerOptions, FilterOption,
  HeaderItemClassNameFunction, BodyItemClassNameFunction, BodyRowClassNameFunction,
  TextDirection,
  ItemKeyFn,
  SortFunction,
} from './types/main';
import type { ClickEventType } from './types/internal';

export default {
  alternating: {
    type: Boolean,
    default: false,
  },
  buttonsPagination: {
    type: Boolean,
    default: false,
  },
  checkboxColumnWidth: {
    type: Number,
    default: null,
  },
  currentPage: {
    type: Number,
    default: 1,
  },
  emptyMessage: {
    type: String,
    default: 'No Available Data',
  },
  expandColumnWidth: {
    type: Number,
    default: 36,
  },
  filterOptions: {
    type: Array as PropType<FilterOption[]>,
    default: null,
  },
  fixedExpand: {
    type: Boolean,
    default: false,
  },
  fixedHeader: {
    type: Boolean,
    default: true,
  },
  fixedCheckbox: {
    type: Boolean,
    default: false,
  },
  fixedIndex: {
    type: Boolean,
    default: false,
  },
  headerTextDirection: {
    type: String as PropType<TextDirection>,
    default: 'left',
  },
  bodyTextDirection: {
    type: String as PropType<TextDirection>,
    default: 'left',
  },
  hideFooter: {
    type: Boolean,
    default: false,
  },
  hideRowsPerPage: {
    type: Boolean,
    default: false,
  },
  hideHeader: {
    type: Boolean,
    default: false,
  },
  indexColumnWidth: {
    type: Number,
    default: 60,
  },
  itemsSelected: {
    type: Array as PropType<Item[]> | null,
    default: null,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  rowsPerPage: {
    type: Number,
    default: 25,
  },
  rowsItems: {
    type: Array as PropType<number[]>,
    default: () => [25, 50, 100],
  },
  rowsPerPageMessage: {
    type: String,
    default: 'rows per page:',
  },
  searchField: {
    type: [String, Array as PropType<String[]>],
    default: '',
  },
  searchValue: {
    type: String,
    default: '',
  },
  serverOptions: {
    type: Object as PropType<ServerOptions> | null,
    default: null,
  },
  serverItemsLength: {
    type: Number,
    default: 0,
  },
  showIndex: {
    type: Boolean,
    default: false,
  },
  sortBy: {
    type: [String, Array as PropType<String[]>],
    default: '',
  },
  sortType: {
    type: [String as PropType<SortType>, Array as PropType<SortType[]>],
    default: 'asc',
  },
  multiSort: {
    type: Boolean,
    default: false,
  },
  sortFunction: {
    type: Function as PropType<SortFunction> | null,
    default: null,
  },
  tableMinHeight: {
    type: Number,
    default: 180,
  },
  tableHeight: {
    type: Number,
    default: null,
  },
  tableClassName: {
    type: String,
    default: '',
  },
  headerClassName: {
    type: String,
    default: '',
  },
  headerItemClassName: {
    type: [Function, String] as PropType<HeaderItemClassNameFunction | string>,
    default: '',
  },
  bodyRowClassName: {
    type: [Function, String] as PropType<BodyRowClassNameFunction | string>,
    default: '',
  },
  bodyExpandRowClassName: {
    type: [Function, String] as PropType<BodyRowClassNameFunction | string>,
    default: '',
  },
  bodyItemClassName: {
    type: [Function, String] as PropType<BodyItemClassNameFunction | string>,
    default: '',
  },
  noHover: {
    type: Boolean,
    default: false,
  },
  borderCell: {
    type: Boolean,
    default: false,
  },
  mustSort: {
    type: Boolean,
    default: false,
  },
  rowsOfPageSeparatorMessage: {
    type: String,
    default: 'of',
  },
  clickEventType: {
    type: String as PropType<ClickEventType>,
    default: 'single',
  },
  clickRowToExpand: {
    type: Boolean,
    default: false,
  },
  tableNodeId: {
    type: String,
    default: '',
  },
  showIndexSymbol: {
    type: String,
    default: '#',
  },
  itemsExpanded: {
    type: Array as PropType<Item[]>,
    default: [],
  },
  /** String object key('id' it's the most common)
   * or Function that returns a unique value for a row.
   * It improves the tracking of expanded and checked rows.
  */
  itemsKey: {
    type: [Function as PropType<ItemKeyFn>, String],
    default: undefined,
  },
  preventContextMenuRow: {
    type: Boolean,
    default: true
  },
};
