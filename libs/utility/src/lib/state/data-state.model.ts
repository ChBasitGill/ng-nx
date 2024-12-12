export type LoadState = 'loading' | 'error' | 'complete'

interface DataStateModel<T> {
  readonly isComplete: boolean
  readonly isError: boolean
  readonly isLoading: boolean
  readonly error: Error | undefined
  readonly state: LoadState
  readonly value: T | undefined
}
export interface LoadingState<T> extends DataStateModel<T> {
  readonly isComplete: false
  readonly isError: false
  readonly isLoading: true
  readonly error: undefined
  readonly state: Extract<LoadState, 'loading'>
}
export interface ErrorState<T> extends DataStateModel<T> {
  readonly isComplete: false
  readonly isError: true
  readonly isLoading: false
  readonly error: Error
  readonly value: undefined
  readonly state: Extract<LoadState, 'error'>
}
export interface CompleteState<T> extends DataStateModel<T> {
  readonly isComplete: true
  readonly isError: false
  readonly isLoading: false
  readonly error: undefined
  readonly value: T
  readonly state: Extract<LoadState, 'complete'>
}

export type DataState<T> = LoadingState<T> | CompleteState<T> | ErrorState<T>

export const createCompleteState = <T>(value: T): CompleteState<T> => ({
  value,
  isComplete: true,
  isError: false,
  isLoading: false,
  error: undefined,
  state: 'complete'
})

export const createLoadingState = <T>(value?: T): LoadingState<T> => ({
  value,
  isComplete: false,
  isError: false,
  isLoading: true,
  error: undefined,
  state: 'loading'
})

export const createErrorState = <T>(error: Error): ErrorState<T> => ({
  value: undefined,
  isComplete: false,
  isError: true,
  isLoading: false,
  error,
  state: 'error'
})
