/**
 *
 * @param {ShallowWrapper} wrapper - Enzyme Shallow Wrapper
 * @param {String} val - Value of data-test attribute for search
 * @return {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};
