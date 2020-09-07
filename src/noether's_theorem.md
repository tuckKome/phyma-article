# Noetherの定理firef

- 参考 : [https://www.saiensu.co.jp/](https://www.saiensu.co.jp/search/?isbn=4910054701272&y=2017)

## Noetherの定理(質点)

- $L(q,\dot{q}, t)$ : Lagragian
- 運動方程式は成り立つとする.

無限小変換
$$   \begin{cases}
    t \mapsto \tilde{t} = t + \epsilon \tau(t) \\
    q(t) \mapsto \tilde{q}(\tilde{t}) = q(t) + \epsilon \xi(q(t),t)
  \end{cases} $$
に対して作用積分が不変なとき,
$$   \begin{cases}
    \Phi = \frac{\partial L}{\partial q} \cdot (\xi - \frac{dq}{dt} \tau) + L\tau  \\
    \dot{\Phi} = 0
  \end{cases} $$
となる.

- $\Phi$をNoether保存量, もしくはNotherChargeとよぶ.

## Noetherの定理(連続体)

- $(1+d)$次元時空で考える. $x \in \mathbf{R}^{1+d}, \varphi(x) \in \mathbf{R}^{d}$
- 運動方程式は成り立つとする.
- $\mathscr{L(\varphi (x), \frac{\partial \varphi}{\partial x})}$

無限小変換
$$
 \begin{cases}
    x \mapsto \tilde{x} = x + \epsilon \xi(x)  \\
    \varphi(x) \mapsto \tilde{\varphi}(\tilde{x}) = \varphi(x) + \epsilon f(x)
  \end{cases} $$
に対して作用積分が不変なとき,
$$
\begin{cases}
    N^{\mu} = \frac{\partial \mathscr{L}}{\partial (\partial_\mu \varphi_i)} (f_i - \frac{\partial \varphi_i}{\partial x} \cdot \xi) + \mathscr{L} \xi^{\mu} \\
    \mathscr{N} = \int N^0 d^dx
  \end{cases}  $$
  
  $$
\begin{cases}
    \partial_{\mu} N^{\mu} = 0 \\
    \dot{\mathscr{N}} = 0
  \end{cases} $$

が成り立つ.

- $**N**$はNotherCurrentとよばれる.
- $\mathscr{N}$はNethorChargeとよばれる.
- $\xi=0$のときは時空と無関係な対称性で, **内部対称性**とよばれる.
- $\epsilon$が定数のときは, 大局的変換とよばれる.
- $\epsilon (x)$のときは, 局所的変換とよばれる.
- Lie微分 $\delta_L$
  - $\delta_L \varphi(x):= \tilde{\varphi}(x) - \varphi(x)$