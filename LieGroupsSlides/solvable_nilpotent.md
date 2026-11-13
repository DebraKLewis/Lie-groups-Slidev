### Recap: Ideals of Lie algebras

A subalgebra $I$ of a Lie algebra $\fg$ is an *ideal* if $\xi \in I \ \Longrightarrow \ \ad_\xi(\fg) \subseteq I$.

If $I$ is an ideal of $\fg$, then $\fg/I$ is a Lie algebra. 

If $\phi : \fg_1 → \fg_2$ is a Lie algebra morphism then $\text{ker} \ \phi$ is an ideal, and 
$$
\fg/\text{ker} \ \phi \approx \phi(\fg).
$$

If $I_1$ and $I_2$ are ideals in $\fg$, then the following are also ideals:
- $I_1 \cap I_2$ 
- $I_1 + I_2$ 
- $[I_1, I_2]% = \text{span}\{ [x, y] :  x ∈ I_1, y ∈ I_2 \}$.

The last assertion follows from the Jacobi identity: given $\xi \in \fg$, $\eta \in I_1$, and $\zeta \in I_2$, 
$$
[\xi, [\eta, \zeta]] = [\underbrace{[\xi, \eta]}_{\in I_1}, \zeta] + [\eta, \underbrace{[\xi, \zeta]}_{\in I_2}]  \in [I_1, I_2].
$$

---

### The *derived algebra* (AKA *commutant*) of $\fg$ is an ideal
$$
[\fg, \fg] := \text{span}\{[\xi, \eta] : \xi, \eta \in \fg \}.
$$

The derived algebra is the smallest ideal of $\fg$ such that the quotient of $\fg$ by the ideal is abelian; <br/>
taking the quotient by $[\fg, \fg]$ amounts to ignoring any noncommutivity.
<Spacer size="10px"/>

#### Example: $\fg = \mathfrak{gl}(n, F) = F^{n \times n}, F = \R\ {}$ or $\ \C$

$$
\eqa{
\text{trace} \, AB =  \text{trace\,}BA \qquad &\Longrightarrow \quad \text{trace} [A, B] = 0 \phantom{\sum} \\
&\Longrightarrow \quad
[\fg, \fg] \subseteq\fh =  \text{ker} \ \text{trace} = \mathfrak{sl}(n, F).\phantom{\sum}
}
$$

If $E_{ij}$ denotes the $n \times n$ matrix with $ij$-th entry = 1 and all other entries equal to $0$, then 
$$
\{ E_{ij} : i \neq j \}  ∪ \{ E_{jj} - E_{(j - 1)(j-1)} : j = 2, \ldots, n \}
$$
is a basis of $\fh$.

---

#### Second slide of $\fg = \mathfrak{gl}(n, F) = F^{n \times n}, F = \R\ {}$ or $\ \C$
<Spacer size="10px"/>

$$
E_{ij} = \half [E_{ii} - E_{jj}, E_{ij}] \qquad \quad \text{if} \ i \neq j 
$$
and
$$
E_{jj} - E_{(j - 1)(j-1)} = [E_{(j-1)j}, E_{j(j-1)}]
$$

$\Longrightarrow \ [\fh, \fh] \supseteq \fh \quad \Longrightarrow \quad [\fg, \fg] = [\fh, \fh] = \fh$.
<Spacer size="10px"/>

$\fg  =  \mathfrak{gl}(n, F) \ {}$ and $\ [\fg, \fg] = \mathfrak{sl}(n, F) \quad \Longrightarrow$ 
$$
\fg/[\fg, \fg] \approx F \, \idm \approx F.
$$

Specifically, the trace map drops to the quotient $\fg/\fh$, which can be identified with the Abelian subalgebra of scalar multiples of the identity matrix. 
---

### Simple Lie algebras

$\fg$ is *simple* if $\fg$ has no ideals except itself and $\{ 0 \}$, and $\ [\fg, \fg] \neq \{ 0 \}$. 

$\fg$ simple $\ \Longrightarrow \ [\fg, \fg] = \fg \ {}$ and $\ Z(\fg) = \{ 0 \}$.
<Spacer size = "15px"/>

#### Example: $\mathfrak{sl}(2, F)$. (More generally, any $F$ such that $\text{char}\, F \neq 2$.)

$0 \neq \eta = x \, \esl + y \, \fsl + z \, \hsl \in I \quad \Longrightarrow$ 
$$
[\esl, [\esl, \eta]] = [\esl, y \, \hsl \pm 2 \esl] = - 2 \, y \, \esl
$$
and
$$ 
[\fsl, [\fsl, \eta]] = [\fsl, - x \, \hsl \pm 2 \fsl] = - 2 \, x \, \fsl, 
$$
so $\ I = \mathfrak{sl}(2, F) \ {}$ if either $x$ or $y$ is nonzero.
<Spacer size = "1px"/>

$x = y = 0\quad \Longrightarrow \quad h \in I \quad \Longrightarrow \quad I =\mathfrak{sl}(2, F)$.

---

### Solvable and nilpotent Lie algebras

The *lower central series* $\ \fg_0, \fg_1, \ldots \ {}$ and *derived series* $\ \fg^{0}, \fg^{1}, \ldots\ {}$ of a Lie algebra $\fg$ are given by
$$
\eqa{
&\fg_0 := \fg \qquad \qquad \qquad \qquad\ \ \  \fg^{0} := \fg \phantom{\sum}\\
&\fg_{j + 1} := [\fg, \fg^j] \qquad \qquad \qquad \fg^{j + 1} := [\fg^{j}, \fg^{j}].    
}
$$
<Spacer size = "1px"/>
$\fg_j$ and $\fg^{j}$ are ideals for all $j \in \N$. 

$\fg$ is *nilpotent* if $\ \fg_{k} = 0\ {}$ for sufficiently large $k$.

$\fg$ is *solvable* if $\fg^{k} = 0\ {}$ for sufficiently large $k$.
<Spacer size = "1px"/>

There is a natural relationship between "nilpotent" as applied to a Lie algebra $\fg$ and "nilpotent" as applied to the operators $\ad_\xi \ {}$ for $\xi \in \fg$.

***Engel's Theorem:*** $\ \fg$ is nilpotent $\quad \Longleftrightarrow \quad$ $\ad_\xi$ is nilpotent $\ \forall \ \xi \in \fg$. <br/>
*(Sketch of the proof later.)*

---

### $\xi \in \mathfrak{gl}(V)\ {}$ nilpotent $\ \ \Longrightarrow \ \ \ad_\xi \ {}$ is nilpotent.
<Spacer size = "1px"/>

*Verify:* Define $\ell_\xi, r_\xi \in \text{End}(\text{End}(V))\ {}$ by
$$
\ell_\xi(\eta) := \xi \, \eta \sands r_\xi(\eta) := \eta \, \xi \qquad \quad \forall \ \eta \in \text{End}(V).
$$

Nilpotency of $\ell_\xi$ and $r_\xi$ follow immediately from nilpotency of $\xi$:
$$
\xi^k = 0 \qquad \Longrightarrow \qquad \ell_\xi^k = 0 = r_\xi^k. 
$$ 

Commutivity of $\ell_\xi$ and $r_\xi \quad \Longrightarrow$
$$
\ad_\xi^n = (\ell_\xi - r_\xi)^n = \sum_{j = 0}^n c_j \ell_\xi^j r_\xi^{n - j}
$$
$\forall \ n \in \N$ and constants $c_j \in \Z$. 

If $\ n \geq 2 k, \ {}$ then $\ j \geq k \ {}$ or $\ n - j \geq k \ {}$ for $\ j = 0, \ldots, n$, so $\ \ad_\xi\ {}$ is nilpotent.

---

### Flags

A *flag*  in a finite dimensional vector space $V$ is a nested sequence of proper subspaces
$$
V_0 = \{ 0 \} ⊂ V_1 ⊂V_2 ⊂ \cdots  ⊂ V_n =V.
$$
<Spacer size = "1px"/>

Given a flag in $V$, temporarily let $\ V_{-j} = \{ 0 \} \ {}$ for $n \in \N$, and define
$$
\mathfrak{a}(k) := \{ \phi ∈ \mathfrak{gl}(V): \phi(V_j) ⊂ V_{j - k} \quad j = 1, \ldots, n \} \quad \qquad k = 0, \ldots, n,
$$
which satisfy 
$$
\{ 0 \} = \mathfrak{a}(n) \subseteq \mathfrak{a}({n - 1}) \subseteq \cdots \subseteq \mathfrak{a}(1).
$$
<Spacer size = "1px"/>

$\phi \in \mathfrak{a}(j)$ and $\psi \in \mathfrak{a}(k) \ \Longrightarrow \ \phi \psi \in \mathfrak{a}({j + k})$, so
$$\ [\mathfrak{a}(j), \mathfrak{a}(k)] ⊂ \mathfrak{a}({j + k}). \ {}$$ 

---

#### Second slide of flags

Set 
$$
\mathfrak{b}  := \mathfrak{a}(0) \sands \mathfrak{n} := \mathfrak{a}(1).
$$
Nilpotency of $\mathfrak{n}$ follows from $\ \mathfrak{n}_n \subseteq \mathfrak{a}(n) = \{ 0 \}, \ {}$ which can be shown by induction, 
with induction step
$$
\eqa{
\mathfrak{n}_j &= [\mathfrak{n},  \mathfrak{n}_{j - 1}] \\
&\subseteq [\mathfrak{a}(1), \mathfrak{a}({j - 1})] \\
&\subseteq \mathfrak{a}({j}).
}
$$

---

###  Example: upper triangular and strictly upper triangular matrices 

Let [$\mathfrak{b}$](https://en.wikipedia.org/wiki/Triangular_matrix#:~:text=Borel%20subgroups%20and%20Borel%20subalgebras) denote the Lie algebra of $n \times n$ [upper triangular matrices](https://en.wikipedia.org/wiki/Triangular_matrix#:~:text=Algebras%20of%20triangular%20matrices), and 
$\mathfrak{n}$ denote the subalgebra of strictly upper triangular matrices. 

***Claim:*** $\mathfrak{b}$ is solvable and $\mathfrak{n}$ is nilpotent.

Consider the "standard" flag in $F^n$: Let $\ \{ e_1, \ldots, e_n \}\ {}$ be a basis of $F^n$, and set
$$
V_0 := \{ 0 \} \sands
V_j = \text{span} \{e_1, \ldots, e_j\} \qquad j = 1, \ldots, n.
$$

*Informal exercise:*
$$
\phi, \psi \in \mathfrak{b} \qquad \Longrightarrow \qquad  [\phi, \psi] ∈ \mathfrak{n} = \mathfrak{a}(1).
$$

Hence $\ \mathfrak{b}^{1} \subseteq \mathfrak{a}(1),$
$$
\mathfrak{b}^{2} = [\mathfrak{b}^{1}, \mathfrak{b}^{1}] \subseteq [\mathfrak{a}(1), \mathfrak{a}(1)] \subseteq \mathfrak{a}(2),
$$
and so on. By induction, $\mathfrak{b}^{j} \subseteq \mathfrak{a}({2j}), \ {}$ so $\mathfrak{b}$ is solvable.

---

#### In-class group exercise: $\mathfrak{n}$ is nilpotent

<Spacer size = "10px"/>

*Hint/request:* Go low tech and example-specific. 

If $A$ and $B$ are strictly upper triangular, and $B$ is zero on the first $j$ superdiagonals, what does that imply about $[A, B]$? 

*Subhint:* Express the $j$-th column of $AB$ as $A$ times the $j$-th colummn of $B$, which equals the linear combination of the columns of $A$ with weights equal to the entries of the $j$-th colummn of $B$. <br/>
Analogous calculations for $BA$. Exploit the 0's.

---

### Some properties of nilpotent Lie algebras

(1) $\fg$ nilpotent $\quad \Longrightarrow \quad$ all subalgebras and homomorphic images of $\fg$ are nilpotent.

(2) $\fg$ nilpotent and nontrivial  $\quad \Longrightarrow \quad Z(\fg)$ is nontrivial.

(3) $\fg/Z(\fg)$ nilpotent $\quad \Longrightarrow \quad \fg \ {}$ nilpotent.
<Spacer size = "5px"/>

*Verify:*
(1) Given a homomorphism $\phi$ of $\fg$, let $\fk := \phi(\fg)$.

<!-- For any subalgebra $\fh$ of $\fg$, $D_j \fh \subseteq D_j\fg$. -->

$\fk_j = \phi(\fg_j) \quad \Longrightarrow$
$$
%D_j \fk = \phi(D_j \fg) \quad j = 0, \ldots, k \qquad \Longrightarrow \qquad
\eqa{
\fk_{j + 1} &= [\fk,  \fk_j] \phantom{\sum} \\
&= [\phi(\fg), \phi(\fg_j)] \phantom{\sum} \\
&= \phi([\fg, \fg_j])\phantom{\sum}  \\
&= \phi(\fg_{j + 1}).
}
$$

---

#### Second slide of proofs of some properties of nilpotent Lie algebras

(2) $\fg$ nilpotent and nontrivial $\quad \Longrightarrow \quad \exists \ k \, {}$ such that 
$$
\fg_k\neq \{ 0 \} = \fg_{k + 1} = [\fg, \fg_k]
$$
$\Longrightarrow$
$$
Z(\fg) \supseteq \ \fg_k \neq \{ 0 \}.
$$
<Spacer size="15px"/>

(3) $\fg/Z(\fg)$ nilpotent $\quad \Longrightarrow \quad \exists \ k \, {}$ such that $\ \fg_k \subseteq Z(\fg)$ 

$\Longrightarrow$
$$
\fg_{k + 1} = [\fg, \fg_k]
\subseteq [\fg, Z(\fg)] = \{ 0 \}.
$$

---

### Properties of solvable Lie algebras

1. $\fg$ solvable $\quad \Longrightarrow \quad$ all subalgebras and homomorphic images of $\fg$ are solvable.

2. If $\ I ⊂ \fg\ {}$ is a solvable ideal and $\ \fg/I \ {}$ is solvable, then $\fg$ is solvable.

3. If $I$ and $J$ are solvable ideals of $\fg, \ {}$ then so is $I + J$.
<Spacer size = "5px"/>

*Verify:*

1. Analogous to arguments for nilpotency.
<Spacer size="5px"/>

2. Let $k, n\in \N$ satisfy 
$$
I^{k} = \{ 0 \} \sands  (\fg/I)^{n} = \{ 0 \}. 
$$

Apply 1. to the quotient homomorphism $\ \pi: \fg \to \fg/I. \ {}$ 

---

#### Second slide of proofs of some properties of solvable Lie algebras
<Spacer size = "5px"/>

$$
% 0 \quad \Longrightarrow \quad 
\fg^{n} \subseteq I = \text{ker} \ \pi 
\quad \Longrightarrow \quad \pi(\fg^{n}) = 0.
$$
<Spacer size = "5px"/>

$$
(\fg^{i})^{j} = \fg^{i + j} \qquad \forall \ i, j \in \N
$$
$\Longrightarrow$
$$
\fg^{k + n} = (\fg^{k})^{n} \subseteq I^{n} = \{ 0 \}.
$$
<Spacer size = "5px"/>

3. $I$ and $J$ solvable $\ \Longrightarrow \ I \cap J\ {}$ is solvable. Hence
$$
\eqa{
(I + J)/J \approx I/(I \cap J)   \qquad &\Longrightarrow \qquad (I + J)/J \quad \text{solvable} \\
& \Longrightarrow \qquad I + J \qquad \text{solvable}.
}
$$

<!--
---

## Ideals of Lie algebras

A subalgebra $I$ of $\fg$ is an *ideal* if $\xi \in I \ \Longrightarrow \ \ad_\xi(\fg) \subseteq I$.

If $I$ is an ideal of $\fg$, then $\fg/I$ is a Lie algebra. 

If $\phi : \fg_1 → \fg_2$ is a Lie algebra morphism then $\text{ker} \ \phi$ is an ideal, and 
$$
\fg_1/\text{ker} \ \phi \approx \phi(\fg_1).
$$

If $I_1$ and $I_2$ are ideals in $\fg$, then the following are also ideals:
- $I_1 \cap I_2$ 
- $I_1 + I_2$ 
- $[I_1, I_2]% = \text{span}\{ [x, y] :  x ∈ I_1, y ∈ I_2 \}$.

The last assertion follows from the Jacobi identity: given $\xi \in \fg$, $\eta \in I_1$, and $\zeta \in I_2$, 
$$
[\xi, [\eta, \zeta]] = [\underbrace{[\xi, \eta]}_{\in I_1}, \zeta] + [\eta, \underbrace{[\xi, \zeta]}_{\in I_2}]  \in [I_1, I_2].
$$

---

Very important ideal: the *derived algebra* (AKA *commutant*) of $\fg$ is
$$
[\fg, \fg] = \text{span}\{[\xi, \eta] : \xi, \eta \in \fg \}.
$$
$~$
***Example:*** Let $\fg = gl(n, F) = F^{n \times n},\ {}$ where $\ F = \R\ {}$ or $\ \C$.
$$
\text{trace} \, AB =  \text{trace\,}BA \qquad \Longrightarrow \qquad \text{trace} [A, B] = 0,
$$
so
$$
[\fg, \fg] \subseteq\fh =  sl(n, F) = \text{ker} \ \text{trace}.
$$
If $E_{ij}$ denotes the $n \times n$ matrix with $ij$th entry = $1$ and all other entries equal to $0$, then 
$$
\{ E_{ij} : i \neq j \}  ∪ \{ E_{jj} - E_{(j - 1)(j-1)} : j = 2, \ldots, n \}
$$
is a basis of $\fh$. 
$$
E_{ij} = \half [E_{ii} - E_{jj}, E_{ij}] \quad\text{if} \ i \neq j \sands
E_{jj} - E_{(j - 1)(j-1)} = [E_{(j-1)j}, E_{j(j-1)}]
$$

$
\Longrightarrow \ [\fh, \fh] \supseteq \fh, \ {}$ and hence $\ [\fg, \fg] = [\fh, \fh] = \fh$.

---

The derived algebra is the smallest ideal of $\fg$ such that the quotient of $\fg$ by the ideal is abelian: taking the quotient by $[\fg, \fg]$ amounts to ignoring any noncommutivity.

In the previous example, with $\ \fg  =  gl(n, F) \ {}$ and $\ [\fg, \fg] = sl(n, F), \ {}$ 
$$
\fg/[\fg, \fg] \approx \R \, \idm \approx \R.
$$
$~$
$\fg$ is *simple* if $\fg$ has no ideals except itself and $\{ 0 \}$, and $\ [\fg, \fg] \neq \{ 0 \}$. 

$\fg$ simple $\ \Longrightarrow \ [\fg, \fg] = \fg \ {}$ and $\ Z(\fg) = \{ 0 \}$.
$~$
***Example:***  $sl(2, F)$. (Any $F$ such that $\text{char}\, F \neq 2$.)

$0 \neq \xi = x \, e + y \, f + z \, h \in I \quad \Longrightarrow$ 
$$
[e, [e, \xi]] = [e, y \, h - 2 \, z\, e] = - 2 \, y \, e 
\sands
[f, [f, \xi]] = [f, - x \, h + 2 \, z \, f] = 2 \, x \, f, 
$$
so $\ I = sl(2, \R) \ {}$ if either $x$ or $y$ is nonzero. 
$x = y = 0\quad \Longrightarrow \quad h \in I \quad \Longrightarrow \quad I = sl(2, \R)$.

---

## Solvable and nilpotent Lie algebras

The *lower central series* and *derived series* of a Lie algebra $\fg$ are given by
$$\eqa{
\fg^0 := \fg \qquad \qquad \qquad\ \ \ &  \fg^{(0)} := \fg\\
\fg^{j + 1} := [\fg, \fg^j] \qquad \qquad & \fg^{(j + 1)} := [\fg^{(j)}, \fg^{(j)}].    
}
$$
$\fg^j$ and $\fg^{(j)}$ are ideals for all $j \in \N$. 

$\fg$ is *nilpotent* if $\ \fg^{k} = 0\ {}$ for some $k \in \N$.

$\fg$ is *solvable* if $\fg^{(k)} = 0\ {}$ for some $k \in \N$.
$~$
There is a natural relationship between "nilpotent" as applied to a Lie algebra $\fg$ and "nilpotent" as applied to the operators $\ad_\xi \ {}$ for $\xi \in \fg$.

Engel's Theorem: $\fg$ is nilpotent $\quad \Longleftrightarrow \quad$ $\ad_\xi$ is nilpotent for all $\xi \in \fg$. 
(Sketch of the proof later.) 

---

***Claim:*** If $\xi \in \text{End}(V)\ {}$ is nilpotent, then $\ad_\xi \ {}$ is nilpotent.
$~$
*Verify:* Define $\ell_\xi, r_\xi \in \text{End}(\text{End}(V))\ {}$ by
$$
\ell_\xi(\eta) := \xi \, \eta \sands r_\xi(\eta) := \eta \, \xi \qquad \quad \forall \ \eta \in \text{End}(V).
$$
$~$
$\ell_\xi$ and $r_\xi$ are nilpotent, since $\ \xi^k = 0 \quad \Longrightarrow$
$$
(\ell_\xi^k(\phi))(v) = \xi^k(\phi(v)) = 0 \sands (r_\xi^k(\phi))(v) = \phi(\xi^k(v)) = \phi(0).
$$ 

Commutivity of $\ell_\xi$ and $r_\xi \ \Longrightarrow$
$$
\ad_\xi^n = (\ell_\xi - r_\xi)^n = \sum_{j = 0}^n c_j \ell_\xi^j r_\xi^{n - j}
$$
for $n \in \N$ and constants $c_j \in \Z$. 

If $\ n \geq 2 k, \ {}$ then $\ j \geq k \ {}$ or $\ n - j \geq k \ {}$ for $\ j = 0, \ldots, n$, so $\ \ad_\xi\ {}$ is nilpotent.

---

### Properties of nilpotent Lie algebras:

(1) $\fg$ nilpotent $\quad \Longrightarrow \quad$ all subalgebras and homomorphic images of $\fg$ are nilpotent.

(2) $\fg$ nilpotent and nontrivial  $\quad \Longrightarrow \quad Z(\fg) \neq \{ 0 \}$.

(3) $\fg/Z(\fg)$ nilpotent $\quad \Longrightarrow \quad \fg \ {}$ nilpotent.

*Verify:*
(1) If $\fh$ is a subalgebra of $\fg$, then $D_j \fh \subseteq D_j\fg$.

If $\fk = \phi(\fg), \ {}$ then $\ \fk^0 = \phi(\fg^0), \ {}$ and $\ \fk^j = \phi(\fg^j) \quad \Longrightarrow$
$$
%D_j \fk = \phi(D_j \fg) \quad j = 0, \ldots, k \qquad \Longrightarrow \qquad
\fk^{j + 1} = [\fk,  \fk^j] = [\phi(\fg), \phi(\fg^j)] = \phi([\fg, \fg^j]) = \phi(\fg^{j + 1}).
$$
$~$
(2) $\fg$ nilpotent and nontrivial $\quad \Longrightarrow \quad \exists \ k \, {}$ such that 
$$
\fg^k\neq \{ 0 \} = \fg^{k + 1} = [\fg, \fg^k].
$$
Hence $Z(\fg) \supseteq \ \fg^k \neq \{ 0 \}$.

---

(3) $\fg/Z(\fg)$ nilpotent $\quad \Longrightarrow \quad \exists  k \, {}$ such that $\ \fg^k \subseteq Z(\fg), \ {}$ and hence
$$
\fg^{k + 1} = [\fg, \fg^k]
\subseteq [\fg, Z(\fg)] = \{ 0 \}.
$$

### Properties of solvable Lie algebras

(1) $\fg$ solvable $\quad \Longrightarrow \quad$ all subalgebras and homomorphic images of $\fg$ are solvable.

(2) If $\ I ⊂ \fg\ {}$ is a solvable ideal and $\ \fg/I \ {}$ is solvable, then $\fg$ is solvable.

(3) If $I$ and $J$ are solvable ideals of $\fg, \ {}$ then so is $I + J$.
$~$
*Verify:*

(1) Analogous to arguments for nilpotency.

(2) Let $k, n\in \N$ satisfy 
$$
I^{(k)} = \{ 0 \} \sands  (\fg/I)^{(n)} = \{ 0 \}. 
$$

---

Apply (1) to the quotient homomorphism $\ \pi: \fg \to \fg/I. \ {}$ 
$$
% 0 \quad \Longrightarrow \quad 
\fg^{(n)} \subseteq I = \text{ker} \ \pi 
\quad \Longrightarrow \quad \pi(\fg^{(n)}) = 0.
$$

$$
(\fg^{(i)})^{(j)} = \fg^{(i + j)} \quad \forall \ i, j \in \N \qquad \Longrightarrow \qquad 
\fg^{(k + n)} = (\fg^{(k)})^{(n)} \subseteq I^{(n)} = \{ 0 \}.
$$
$~$
(3) $I$ and $J$ solvable $\ \Longrightarrow \ I \cap J\ {}$ is solvable. Hence
$$\eqa{
(I + J)/J \approx I/(I \cap J)   \quad &\Longrightarrow \quad (I + J)/J \quad \text{solvable} \\
& \Longrightarrow \quad I + J \quad \text{solvable}.
}
$$

---

### Semisimple Lie algebras

$S$ is a *maximal solvable ideal* if $S$ is a solvable ideal in $\fg$ and is not a proper subset of another solvable ideal in $\fg$. 

***Claim:*** There is *maximal solvable ideal* $\ \text{Rad} \, \fg \ {}$ in $\fg, \ {}$ called the *radical* of $\fg$. 

*Verify:* If $S$ is a maximal solvable ideal, and $I$ is another ideal of $\fg$, then (3) $\ \Longrightarrow$
$S + I \ {}$ is solvable. 
Hence maximality of $S\ \Longrightarrow S + I = S$.
$~$
$\fg$ is *semisimple* if $\ \text{Rad} \, \fg\ {}$ is trivial.
$~$
Simple Lie algebras are semisimple.
*Why?* The only ideals of a simple algebra $\fg$ are $\{ 0 \}$ and $\fg$, and $\fg$ simple $\ \Longrightarrow \ [\fg, \fg] = \fg, \ {}$ so $\fg$ is not solvable.

$\fg/\text{Rad} \, \fg\ {}$ is always semisimple.

-->