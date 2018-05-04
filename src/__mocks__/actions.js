export const fetchSome = jest.fn().mockReturnValue({
  then: cb => {
    cb('some mocked data');
    return {
      catch: () => {},
    };
  },
});