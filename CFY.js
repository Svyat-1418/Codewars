function century(year) {
      let result = 0;
        for (let i = 0; i < year; i++) {
            if (i % 100 === 0) {
                  result++;
                      }
                        }
                          return result;
                          }
}